import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const CheakOutForm = ({ price, myclasses }) => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState([])
    const [transactionId, setTransactionId] = useState('')
    const [proccesing, setProccessening] = useState(false)

    const available_sitThere = myclasses.map(m=>m._id);
    console.log(available_sitThere); 

    useEffect(() => {
        if (price) {
            axiosSecure.post('/create-payment-intent',  {price} )
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, price])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error);
            setCardError(error.message)
        }
        else {
            setCardError('')
            console.log('paymrnt Method', paymentMethod);
        }

        setProccessening(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'unknown',
                    email: user?.email || 'anonymous'
                }
            }
        });
        if (confirmError) {
            console.log(confirmError);
        }
        console.log('payment intent', paymentIntent);
        setProccessening(false)
        if (paymentIntent.status === "succeeded") {
            const transactionId = paymentIntent.id;
            setTransactionId(transactionId)

            const payment = {
                email: user?.email,
                transactionId: transactionId,
                price,
                date: new Date(),
                quantity: myclasses.length,
                all: myclasses.map(m=> m),
                itemId: myclasses.map(m=> m._id),
                itemName: myclasses.map(m=> m.name),
                itemImg: myclasses.map(m=> m.img),
            }
            axiosSecure.post('/enrolClass', payment)
            .then(res=>{
                console.log(res.data.result.insertedId);
                if(res.data.result.insertedId){
                    axiosSecure.patch(`/Class/seatupdate/${available_sitThere}`)
                    .then(res=>{
                        console.log(res);
                    })
                }
               
            })
     const all = {transactionId,email: user?.email, date: new Date()}
            axiosSecure.post('/paymentHistory' ,all)
            .then(tr=>{
                console.log(tr);
            })
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Payment has been successfull',
                showConfirmButton: false,
                timer: 1500
              })
        }

    }
    return (
        <>
            <form className="w-2/4 mx-auto mt-12" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-warning btn-outline mt-5" type="submit" disabled={!stripe || !clientSecret || proccesing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-500 mt-3 text-center">{cardError}</p>}
            {transactionId && <p className=" text-xl text-green-500 text-center"> Transaction Complete : {transactionId}</p>}
        </>
    );
};

export default CheakOutForm;
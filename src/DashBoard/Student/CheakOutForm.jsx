import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";


const CheakOutForm = ({ price }) => {
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState([])
    const [transactionId, setTransactionId] = useState('')

    useEffect(() => {
        if(price){
            axiosSecure.post('/create-payment-intent', {price})
        .then(res=>{
            // console.log(res.data.clientSecret);
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

        const {paymentIntent,error: confirmError} = await stripe.confirmCardPayment( clientSecret,{
             payment_method:{
                card: card,
                billing_details:{
                    name : user?.displayName || 'unknown',
                    email: user?.email || 'anonymous' 
                }
             }
        });
        if(confirmError){
            console.log(confirmError);
        }
         console.log( 'payment intent',paymentIntent);

         if(paymentIntent.status === "succeeded"){
            const transactionId = paymentIntent.id;
            setTransactionId(transactionId)
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
                <button className="btn btn-warning btn-outline mt-5" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-500 text-center">{cardError}</p>}
            {transactionId && <p className="text-green-500 text-center"> tram : {transactionId}</p>}
        </>
    );
};

export default CheakOutForm;
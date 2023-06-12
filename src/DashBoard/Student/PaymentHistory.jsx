import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Fade } from "react-awesome-reveal";


const PaymentHistory = () => {
    const { user } = useAuth()
    const [data, setData] = useState()
    useEffect(() => {
        axios.get(`https://assign-12-server-tan.vercel.app/paymentmyHistory?email=${user?.email}`)
            .then(data => {
                // console.log(data);
                setData(data.data)
            })
    }, [user?.email])
    console.log(data);
    return (
        <div className="text-center mt-10">
            {
                data?.map((m, i) => <div key={m._id}>

                    <Fade cascade damping={0.6}>
                       
                    <h4 className="text-2xl font-semibold">{i + 1}. TransactionId : {m.transactionId}</h4>
                    <h4>{m.date}</h4>
                    </Fade>
                </div>)
            }
        </div>
    );
};

export default PaymentHistory;
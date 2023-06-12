import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";


const PaymentHistory = () => {
    const {user} = useAuth()
    const [data, setData] = useState()
    useEffect(() => {
        axios.get(`http://localhost:5000/paymentmyHistory?email=${user?.email}`)
            .then(data => {
                // console.log(data);
                setData(data.data)
            })
    }, [])
    console.log(data);
    return (
        <div className="text-center mt-10">
        {
            data?.map((m,i)=> <div key={m._id}>
                <h4 className="text-2xl font-semibold">{i + 1}. TransactionId : {m.transactionId}</h4>
                <h4>{m.date}</h4>
            </div>)
        }
        </div>
    );
};

export default PaymentHistory;
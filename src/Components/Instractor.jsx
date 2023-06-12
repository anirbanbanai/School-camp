
import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import ExtraInstrucor from "./ExtraInstrucor";
import { Helmet } from "react-helmet-async";
const Instractor = () => {
    const [axiosSecure] = useAxiosSecure()
    const [data, setData] = useState([])

   
   
    useEffect(() => {
        axiosSecure.get('/ins')
            .then(data => {
                // console.log(data.data);
                setData(data.data)
            })
    }, [axiosSecure])
    return (
        <>
        <Helmet>
            <title>Instructor</title>
        </Helmet>
        <div className='pt-28 pb-5 grid md:grid-cols-2 lg:grid-cols-3'>
            {
                data.map(m=><ExtraInstrucor key={m._id} m={m}></ExtraInstrucor>)
            }
        </div>
        </>
    );
};

export default Instractor;
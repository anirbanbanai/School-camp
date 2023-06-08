
import { useEffect, useState } from "react";
import SubClasses from "./SubClasses";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Classes = () => {
    const [axiosSecure] = useAxiosSecure()
    const [data, setData] = useState([])
   useEffect(()=>{
    axiosSecure.get('/classes'
    )
   .then(data=>{
       // console.log(data.data);
       setData(data.data)
   })
   },[axiosSecure])

    return (
        <div className="pt-20">
            <h4 className="text-4xl font-semibold text-center">All class </h4>
            <div>
                {
                    data.map(m=><SubClasses key={m._id} main={m}></SubClasses>)
                }
            </div>
        </div>
    );
};

export default Classes;
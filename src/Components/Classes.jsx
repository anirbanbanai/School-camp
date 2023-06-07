import axios from "axios";
import { useState } from "react";
import SubClasses from "./SubClasses";

const Classes = () => {
    const [data, setData] = useState([])
    axios.get('http://localhost:5000/classes')
    .then(data=>{
        // console.log(data.data);
        setData(data.data)
    })

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
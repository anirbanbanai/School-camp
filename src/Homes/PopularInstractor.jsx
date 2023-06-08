import { useEffect, useState } from "react";

const PopularInstractor = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/ins')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setData(data)
        })
    },[])
   
    return (
        <div>
            <h3 className="text-center text-3xl font-semibold">Popular Instractor</h3>
            <div className="grid grid-cols-3">
                {
                    data.map(m=><div className="border-2 m-5 p-4" key={m._id}>

                        <h2>{m.name}</h2>
                        <h3>{m.email}</h3>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstractor;
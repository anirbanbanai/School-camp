import { useEffect, useState } from "react";

const PopularInstractor = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://assign-12-server-tan.vercel.app/ins')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setData(data)
        })
    },[])
//    console.log(data);
    return (
        <div>
            <h3 className="text-center text-3xl font-semibold">Popular Instractor</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {
                    data.slice(0,6).map(m=><div className="border-2 m-5 p-4 mx-auto" key={m._id}>

                        <h2 className="text-2xl text-center font-semibold">{m.name}</h2>

                        <img  className='h-[250px] mx-auto' src={m.photo} alt="" />
                       <div className="flex justify-center">
                       <button className="btn btn-outline btn-warning mx-auto">Details</button>
                       </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstractor;
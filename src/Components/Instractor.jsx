
import axios from "axios";
import { useState } from "react";

const Instractor = () => {
    const [data, setData] = useState([])
   
    axios.get('http://localhost:5000/ins')
    .then(data=>{
        console.log(data.data);
        setData(data.data)
    })
    return (
        <div className='pt-20 grid md:grid-cols-2 lg:grid-cols-3'>
            {
                data.map(m=><div className='border-2 m-5 p-3 ' key={m._id}>
                    <p className='text-xl text-center font-semibold'>Name: {m.name}</p>
                    <h3 className='text-center'>Email : {m.email}</h3>
                    <img className='h-[250px] mx-auto' src={m.img} alt="" />
                    <h4 className='font-bold text-center'>{m.ins}</h4>
                </div>)
            }
        </div>
    );
};

export default Instractor;
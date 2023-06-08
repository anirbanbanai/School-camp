import { useEffect } from "react";



const JWT = () => {
    const JW = ()=>{
        console.log('clicked');

       useEffect(()=>{
        fetch('http://localhost:5000/ganarate-jwt', {
            method:"POST",
            headers:{
                'content-type' : "application/json"
            },
            body:JSON.stringify({userName: "Anirbnan"})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
       },[])

    }
    return (
        <div className="pt-20">
            <button onClick={JW} className="btn btn-warning">Ganarate JWT</button>
        </div>
    );
};

export default JWT;
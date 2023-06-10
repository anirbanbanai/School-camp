import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import SubMySelec from "./SubMySelec";

const MySelectedClass = () => {
    const[data, setData] = useState([]);
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    useEffect(()=>{
     axiosSecure.get(`/selectedmyClass?email=${user?.email}`)
     .then(data=>{
        console.log(data);
        setData(data.data)
     })
    },[])
    console.log(data);
    return (
        <div>
            <h3>MySlected Class</h3>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Class name</th>
        <th>Image</th>
        <th>Instructor</th>
        <th>Price</th>
        <th>delete</th>
      </tr>
    </thead>
    <tbody>
      {
      data?.map((m,i)=><SubMySelec key={m._id} m={m} i={i}></SubMySelec>)
      }
      
     
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default MySelectedClass;
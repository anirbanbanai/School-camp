import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SubManageClass from "./SubManageClass";
// import SubManageClass from "./SubManageClass";

const ManageClass = () => {
    const [data, setData] = useState();
    const [axiosSecure] = useAxiosSecure();
    useEffect(()=>{
        axiosSecure.get('/classes')
        .then(data=>{
            console.log(data);
            setData(data.data)
        })
    },[axiosSecure])
    console.log(data);
    return (
        <div className="m-10">
            <h5>Manage Class</h5>
            <div>
            <div className="overflow-x-auto">
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
      <tr>
        <th>#</th> 
        <td>Class Image</td> 
        <td>Class Name</td> 
        <td>Instructor </td> 
        <td>Available seat</td> 
        <td>Price</td> 
        <td>Approve</td>
        <th>Deny</th> 
        <th>Send Feedback</th> 
      </tr>
    </thead> 
    <tbody>
      {
        data.map((m, index)=><SubManageClass key={m._id} main={m} i={index}></SubManageClass>)
      }
     
    </tbody> 
  </table>
</div>
            </div>
        </div>
    );
};

export default ManageClass;
// {
//     data?.map(m=> <SubManageClass key={m._id} main={m}></SubManageClass>)
// }
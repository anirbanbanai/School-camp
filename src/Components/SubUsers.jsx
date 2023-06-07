import axios from 'axios';
import { BiUserVoice } from 'react-icons/bi';
import { GrUserAdmin } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';

const SubUsers = ({ m ,i}) => {
    const handleAddAdmin=(id)=>{
        axios.patch(`http://localhost:5000/users/admin/${id}`)
        .then(data=>{
            console.log(data);
        })
    }
    return (
       
          <>
            <tr>
                <th>{i + 1}</th>
                <td>{m.name}</td>
                <td>
                    <img className="w-[100px] rounded-2xl" src={m.photo} alt="" />
                </td>
                <td>{m.email}</td>
                <td>
                    <button  className="btn btn-warning btn-md text-2xl"><BiUserVoice/></button>
                </td>
                <td>
                    { m.role === "admin" ? "admin" : <button onClick={()=>handleAddAdmin(m._id)} className="btn btn-warning btn-md text-2xl"><GrUserAdmin/></button>}
                </td>
                <td>
                    <button className="btn btn-warning btn-md text-2xl"><RiDeleteBin6Line/></button>
                </td>
            </tr>
          </>
        
    );
};

export default SubUsers;
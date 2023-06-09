import axios from 'axios';
import { BiUserVoice } from 'react-icons/bi';
import { GrUserAdmin } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const SubUsers = ({ m, i ,refetch}) => {
    const [axiosSecure] = useAxiosSecure()

    const handleAddAdmin = (id) => {
        axios.patch(`http://localhost:5000/users/admin/${id._id}`)
            .then(data => {
                console.log(data);
                refetch()
            })
    }
    const makeInstractor = (id) => {
        console.log(id);
        axios.patch(`http://localhost:5000/users/ins/${id._id}`)
            .then(data => {
                console.log(data);
                refetch()
            });

        axiosSecure.post('/ins', id)
        .then(data=>{
            console.log(data);
        })

    }
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/users/${id}`)
            .then((data) => {
                if (data.data.deletedCount) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    );
                    refetch()
                }
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
                    {m.role === "instractor" ? <p className='text-xl font-bold'>instractor</p> : <button onClick={() => makeInstractor(m)} className="btn btn-warning btn-md text-2xl"><BiUserVoice /></button>}
                </td>
                <td>
                    {m.role === "admin" ? <p className='text-xl font-bold'>Admin</p> : <button onClick={() => handleAddAdmin(m)} className="btn btn-warning btn-md text-2xl"><GrUserAdmin /></button>}
                </td>
                <td>
                    <button onClick={() => handleDelete(m._id)} className="btn btn-warning btn-md text-2xl"><RiDeleteBin6Line /></button>
                </td>
            </tr>
        </>

    );
};

export default SubUsers;
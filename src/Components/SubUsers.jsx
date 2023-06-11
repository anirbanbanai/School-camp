import axios from 'axios';
import { BiUserVoice } from 'react-icons/bi';
import { GrUserAdmin } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const SubUsers = ({ m, i ,refetch}) => {
    const [axiosSecure] = useAxiosSecure()

    const handleAddAdmin = (id) => {
        Swal.fire({
            title: 'Are you sure? You want to Admin this person?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result)=>{
            if(result.isConfirmed){
                axios.patch(`https://assign-12-server-tan.vercel.app/users/admin/${id._id}`)
                .then(data => {
                    console.log(data);
                    refetch()
                    Swal.fire(
                        'Admin!',
                        'You make Admin this user!',
                        'success'
                      )
                })
            }
          })
        
    }
    const makeInstractor = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure? You want to Instructor this person?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.patch(`https://assign-12-server-tan.vercel.app/users/ins/${id._id}`)
                .then(data => {
                    console.log(data);
                    axiosSecure.post('/ins', id)
                    .then(data=>{
                        console.log(data);
                        if(data.data.insertedId){
                            Swal.fire(
                                'Instructor now!',
                                'You make Instructor this user!',
                                'success'
                              )
                        }
                    })
                    refetch()
                });
            }
          })
        
     

    }
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://assign-12-server-tan.vercel.app/users/${id}`)
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
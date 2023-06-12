// import { MdOutlinePending } from 'react-icons/md';
// import { FiDelete } from 'react-icons/fi';
import { RiFeedbackLine } from 'react-icons/ri';
import { BsQuestionSquareFill } from 'react-icons/bs';
import { FcAcceptDatabase, FcCancel } from 'react-icons/fc';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import axios from 'axios';
import Swal from 'sweetalert2';

const SubManageClass = ({ main, i, refetch }) => {
    const [axiosSecure] = useAxiosSecure()
    const { name, img, instructor_name, available_seats, price } = main;

    const handleApproveClass = (data) => {
        console.log(data);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes,!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.patch(`http://localhost:5000/aproveClass/aprove/${data._id}`)
                    .then(res => {
                        console.log(res);
                        axiosSecure.post('/aproveClass', data)
                            .then(data => {
                                console.log(data);
                                refetch()
                            })
                    })
                Swal.fire(
                    'Aprtoved!',
                    'This class has ben approved',
                    'success'
                )
            }
        })
    }

    const handleDeny = (main) => {
        console.log(main);
        axios.patch(`http://localhost:5000/aproveClass/deny/${main._id}`)
        .then(res =>{
            console.log(res.data);
        })
    }

    // const handleDelete = (data) => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //             axios.delete(`http://localhost:5000/classes/${data._id}`)
    //             .then((data) => {
    //                 console.log(data);
    //                 if (data.data.deletedCount) {
    //                     Swal.fire(
    //                         'Deleted!',
    //                         'Your file has been deleted.',
    //                         'success'
    //                     );
    //                     refetch()
    //                 }
    //             })
    //         }
    //       })

    // }
    return (
        <>
            <tr>
                <th>{i + 1}</th>
                <td>
                    <img className="w-[100px] mx-auto rounded-2xl" src={img} alt="" />
                </td>
                <td className='text-sm font-semibold'>{name}</td>
                <td className='text-sm font-semibold'>{instructor_name}</td>
                <td className='text-sm font-semibold'>{available_seats}</td>
                <td className='text-sm font-semibold'>{price}</td>
                <td>
                    {
                        main.role === 'aprove' ? <h5 ><FcAcceptDatabase className='text-4xl' /></h5> : <button onClick={() => handleApproveClass(main)} className="btn hover:btn-warning btn-sm text-2xl mb-1"><BsQuestionSquareFill /></button>
                    }

                </td>
                <td>
                    <button onClick={() => handleDeny(main)} className="btn hover:bg-red-500 text-white btn-sm text-2xl mb-1"><FcCancel /></button> <br />
                </td>
                <td>
                    <button className="btn btn-success btn-sm text-2xl mb-1"><RiFeedbackLine /></button>
                </td>

                <th></th>
            </tr>
        </>
    );
};

export default SubManageClass;



// jkcvdskcdsk   ani r 
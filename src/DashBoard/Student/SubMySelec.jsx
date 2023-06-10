import { RiDeleteBin5Line } from "react-icons/ri";
import { CgEnter } from 'react-icons/cg';
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import axios from "axios";

const SubMySelec = ({ m, i , refetch}) => {
    const [axiosSecure] = useAxiosSecure()

    const handleEnrol = (data) => {
        axios.patch(`http://localhost:5000/selectedClass/enrol/${data._id}`)
            .then(res => {
                console.log(res);
                axiosSecure.post('/enrolClass', data)
                    .then(data => {
                        console.log(data);
                        refetch()
                        if (data.data.insertedId) {
                            Swal.fire({
                                position: 'top',
                                icon: 'success',
                                title: 'Your work has been saved',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            })

    }
    return (
        <>
            <tr>
                <th>{i + 1}</th>
                <th>{m.name}</th>
                <td>
                    <img className="w-[80px]" src={m.img} alt="" />
                </td>
                <td>
                    {m.instructor_name}
                </td>
                <td>
                    ${m.price}
                </td>
                <td>
                  {m.role === 'enrol'? <h3 className="text-green-500 text-xl font-bold">Enrolled</h3> :  <button onClick={() => handleEnrol(m)} className="btn btn-warning btn-outline"><CgEnter className="text-3xl" /></button>}
                </td>
                <td>
                    <button className="btn hover:bg-red-400  btn-outline hover:text-black "><RiDeleteBin5Line className="text-3xl" /></button>
                </td>
            </tr>
        </>
    );
};

export default SubMySelec;
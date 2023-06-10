// import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const SubClasses = ({ main }) => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const handleSelected = (data) => {
        delete data._id
        // console.log(data);
        if (!user) {
            Swal.fire({
                title: 'Please login',
                text: "You won't be select if you not user!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login')
                }
              })
        }
        else {
            const alldata = {name:data.name, email: user?.email, details:data.details,price:data.price, img:data.img, instructor_name:data.instructor_name, ins_email:data.email  }
            axiosSecure.post('/selectedClass', alldata)
                .then(data => {
                    console.log(data);
                    if(data.insertedId == data._id){
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'Your classes has been selected',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
        }
    }
    return (
        <div>
            <div className='border-2 m-5 p-5 w-3/4 rounded-xl mx-auto text-center' >
                <p className="text-xl font-semibold">{main.name}</p>
                <h4>Instractor: <b>{main.instructor_name}</b></h4>
                <img className=" md:w-2/4 mx-auto rounded-xl" src={main.img} alt="" />
                <h3>{main.details}</h3>
                <p>price: ${main.price}</p>
                <p>Available seat : {main.available_seats}</p>

                {/* bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed */}

                <div >
                    <button onClick={() => handleSelected(main)} className="btn btn-secondary ">Selecet</button>
                </div>

            </div>
        </div>
    );
};

export default SubClasses;

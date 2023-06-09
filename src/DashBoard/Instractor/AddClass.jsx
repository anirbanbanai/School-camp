import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddClass = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure()
    console.log(user);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axiosSecure.post('/classes', data)
        .then(data=>{
            console.log(data);
            if(data.data.insertedId){
                reset()
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Your Classes has been added',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  
            }
        })
    };
    return (
        <div className="m-10">
            <h5 className="text-4xl font-semibold text-center">Add Class</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="flex">
               <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Class name</span>
                    </label>
                    <input type="text" {...register("name", { required: true })} placeholder="Class Name" className="input input-bordered w-full " />
                  </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Instructor name</span>
                    </label>
                    <input type="text" {...register("instructor_name", { required: true })} placeholder="Instructor Name" className="input input-bordered w-full " />
                  </div>
               </div>
               <div className="flex justify-between">
               <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Instructor email</span>
                    </label>
                    <input type="text" {...register("email", { required: true })} placeholder="Email" className="input input-bordered w-full " />
                  </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" {...register("price", { required: true })} placeholder="price" className="input input-bordered w-full " />
                  </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Avilable seat</span>
                    </label>
                    <input type="number" {...register("available_seats", { required: true })} placeholder="avilable seat" className="input input-bordered w-full " />
                  </div>
               </div>
               <div className="mt-5">
               <input type="file" {...register("img", { required: true })} className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
               </div>
              <div className="flex justify-center ">
              <input className="btn btn-warning mx-auto" type="submit" value="Submit" />
              </div>
            </form>
        </div>
    );
};

export default AddClass;
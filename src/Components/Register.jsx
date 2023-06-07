import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Auth/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState(' ');
    const [success, setSuccess] = useState(' ')
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { signUp } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data)
        signUp(data.email, data.confirmpassword)
            .then(result => {
                console.log(result.user);
                setSuccess('User created successfull')
                reset()
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message)
            })
    };

    return (
        <div className="pt-20">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                            </div>
                            {errors.name?.type === 'required' && <span className="text-red-500">Name is required</span>}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            </div>
                            {errors.email?.type === 'required' && <span className="text-red-500">Email is required</span>}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"   {...register("password")} className="input input-bordered" />
                            </div>
                            {/* {errors.password && <span className="text-red-500">Password is required</span> } */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type={!show ? "password" : "text"} placeholder="password"  {...register("confirmpassword",
                                    {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-])/
                                    },
                                )} className="input input-bordered" />
                                <label className="label">
                                    <h5 className="text-sm" onClick={() => setShow(!show)}>Show Password</h5>
                                </label>

                                {errors.confirmpassword?.type === 'required' && <span className="text-red-500">Password required</span>}
                                {errors.confirmpassword?.type === 'minLength' && <span className="text-red-500">Must be 6 caracter</span>}
                                {errors.confirmpassword?.type === 'pattern' && <span className="text-red-500">Must have one uppercase, one lowercase,one number and one special carecter </span>}

                                <h3 className="text-red-600">{error}</h3>
                                <h3 className="text-green-600">{success}</h3>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <h3>Already have an accunt? <Link to='/login'>Login</Link></h3>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
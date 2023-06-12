import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Auth/AuthProvider";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loginUser, googleSignIn } = useContext(AuthContext)
  const [show, setShow] = useState(false);
  const [error, setError] = useState(' ');
  const location = useLocation();
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/';

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    setError()
    // console.log(data);

    loginUser(data.email, data.password)
      .then(() => {
        // console.log(result.user);
        reset()

        navigate(from, { replace: true })
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Login Successfull',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(err => {
        console.log(err.message);
        setError(err.message)
      })
  };

  // console.log(register);


  const handleGogleLogin = () => {
    googleSignIn()
  }
  return (
    <div className="pt-20">
      <Helmet><title>Login</title></Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email")} required placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={!show ? "password" : "text"} placeholder="password" required  {...register("password")} className="input input-bordered" />
                <h5 className="text-3xl" onClick={() => setShow(!show)}>{show ? <AiFillEye /> : <AiFillEyeInvisible />}</h5>

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <h3>New user? <Link to='/register'>Register</Link></h3>
              <h3 className="text-red-500">{error}</h3>

            </form>
            <button onClick={handleGogleLogin} className="btn btn-circle btn-outline mx-auto text-4xl"><FcGoogle /></button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
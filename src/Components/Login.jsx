import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Auth/AuthProvider";

const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const { register, handleSubmit,reset   } = useForm();
    const onSubmit = data => {
       
        console.log(data);
        loginUser(data.email, data.password)
        .then(result=>{
            console.log(result.user);
            reset()
        })
    };
  
    // console.log(register);

    
    const handleGogleLogin = ()=>{
        console.log('click worked');
    }
    return (
        <div className="pt-20">
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
          <h5 className="text-sm" onClick={()=>setShow(!show)}>Show Password</h5>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <h3>New user? <Link to='/register'>Register</Link></h3>
       
      </form>
      <button onClick={handleGogleLogin} className="btn btn-circle btn-outline mx-auto text-4xl"><FcGoogle/></button>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;
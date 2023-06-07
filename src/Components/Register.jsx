import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit,formState: { errors }  } = useForm();
    const onSubmit = data => console.log(data);
  
    // console.log(register);
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
          <input type="text" {...register("name", {required: true})} placeholder="name" className="input input-bordered" />
        </div>
        {errors.name?.type ==='required' && <span className="text-red-500">Name is required</span> }
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", {required: true}) }  placeholder="email" className="input input-bordered" />
        </div>
        {errors.email?.type ==='required' && <span className="text-red-500">Email is required</span> }
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
          <input type="password" placeholder="password"  {...register("confirmpassword",
           {required: true,
             minLength:6,
              pattern:/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-])/
            },
           )} className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>

          {errors.confirmpassword?.type ==='required' && <span className="text-red-500">Password required</span> }
          {errors.confirmpassword?.type ==='minLength' && <span className="text-red-500">Must be 6 caracter</span> }
          {errors.confirmpassword?.type ==='pattern' && <span className="text-red-500">Must have one uppercase, one lowercase,one number and one special carecter </span> }

        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;
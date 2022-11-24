import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const {logIn, providerLogin} = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider()
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"
  const { register, formState: { errors }, handleSubmit } = useForm();
  const handleLogin = data => {
    logIn(data.email, data.password)
    .then(result => {
      console.log('Login Successful')
      navigate(from, { replace: true })
    })
    .catch(error => {
      console.error(error)
    })
  }
  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
    .then(result => console.log(result.user))
    .catch(error => console.error(error))
  }
  return (
    <div className="flex justify-center items-center" style={{height: 'calc(100vh - 80px)'}}>
      <div className='w-96 p-7'>
        <h2 className="text-primary text-3xl text-center font-medium mb-5">
          Login
        </h2>
        <form onSubmit={handleSubmit(handleLogin)} >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
          <input type="email" className="input input-bordered w-full" {...register("email", { required: "Email Address is required" })} />
          {errors.email && <p role="alert" className="text-red-600 my-1">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
          <input type="password" className="input input-bordered w-full" {...register("password", { required: "Password is required", minLength: {value: 6, message: "Password should be at least 6 characters"} })} />
          <label className="label">
    <span className="label-text-alt">Forgot Password?</span>
  </label>
  {errors.password && <p role="alert" className="text-red-600 my-1">{errors.password?.message}</p>}
          </div>
          <input type="submit" className="btn btn-accent w-full"/>
        </form>
        <p className="text-center mt-6">New to Doctors Portal? <Link to='/signup' className="text-primary font-medium">Create a New Account</Link></p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleLogin} className="btn btn-accent btn-outline w-full">Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;

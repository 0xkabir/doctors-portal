import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const { createUser, updateUser, providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        toast.success("User Created");
        const userInfo = { displayName: data.name };
        updateUser(userInfo)
          .then(() => {
            toast.success("Info updated");
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };
  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
      .then((result) => console.log(result.user))
      .catch((error) => console.error(error));
  };
  return (
    <div
      className="flex justify-center items-center"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="w-96 p-7">
        <h2 className="text-primary text-3xl text-center font-medium mb-5">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p role="alert" className="text-red-600 my-1">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email address is required" })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p role="alert" className="text-red-600 my-1">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password should be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p role="alert" className="text-red-600 my-1">
                {errors.password?.message}
              </p>
            )}
          </div>
          <input type="submit" className="btn btn-accent w-full mt-3" />
        </form>
        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-medium">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-accent btn-outline w-full"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;

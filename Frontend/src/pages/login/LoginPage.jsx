import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import MainLayout from "../../components/MainLayout.jsx";
import { login } from "../../services/index/users.js";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/reducers/userReducers.js";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const useState = useSelector((state) => state.user);
  const { mutate, isLoading } = useMutation({
    mutationFn: ({  email, password }) => {
      return login({  email, password });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  useEffect(() => {
    if (useState.userInfo) {
      navigate("/");
    }
  }, [navigate, useState.userInfo]);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
   
  } = useForm({
    defaultValues: {
      
      email: "",
      password: "",
      
    },
    mode: "onChange",
  });
  const submitHandler = (data) => {
    const {  email, password } = data;
    mutate({  email, password });
  };

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
           Login
          </h1>
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
       

          <div className="flex flex-col mb-6 w-full">
            <label
              htmlFor="email"
              className="text-[#5a7184] font-semibold block"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              {...register("email", {
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
              placeholder="Enter email"
              className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border  ${
                errors.email ? "border-red-500" : "border-[#c3cad9]"
              }`}
            ></input>
            {errors.email?.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col mb-6 w-full">
            <label
              htmlFor="password"
              className="text-[#5a7184] font-semibold block"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                minLength: {
                  value: 6,
                  message: "Password lenght must be at least 6 character",
                },
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
              placeholder="Enter password"
              className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border  ${
                errors.password ? "border-red-500" : "border-[#c3cad9]"
              }`}
            ></input>
            {errors.password?.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password?.message}
              </p>
            )}
          </div>
     
          <Link
            to="/forgot-password"
            className="text-sm font-semibold text-[#4a9871]"
          >
            Forgot password?
          </Link>
          <button
            type="submit"
            disabled={!isValid || isLoading}
            className="bg-[#4a9871] text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            Sign In
          </button>

          <p className="text-sm font-semibold text-[#5a7184]">
           Do not have an account?
            <Link to="/register" className="text-[#4a9871]">
              Register now
            </Link>
          </p>
        </form>
      </section>
    </MainLayout>
  );
};

export default LoginPage;

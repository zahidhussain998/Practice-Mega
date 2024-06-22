/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from 'react-hook-form';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");

    try {
      const session = await authService.login(data);

      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full mac-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className=" mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your Account
        </h2>
        don&apos;t have any Account?&nbsp;
        <Link
          to="/singup"
          className="font-medium text-primary transition-all
               duration-200 hover:underline"
        >
          signUp
        </Link>
        <p>{error && <p>{error}</p>}</p>
        <from onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              lable="Email:"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />

            <Input
              lable="password:"
              type="password"
              placeholder="enter your password"
              {...register("password", {
                required: true,
              })}
            />

            <Button type="Submit" className="w-full">
              Singn In
            </Button>
          </div>
        </from>
      </div>
    </div>
  );
}

export default Login;

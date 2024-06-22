/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { set, useForm } from 'react-hook-form';

function Singup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState("");

  const create = async (data) => {
    setError("");

    try {
      const userData = await authService.createAccount(data);

      if (userData) {
        const userData = await authService.getCurrentUser();

        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };


  const created = async(data) => {
    setError('')

    try {
       const userdate = authService.createAccount(data)
       if(userdate){
        const userdate = authService.getCurrentUser();

        if(userdate) dispatch(login(userdate))

          navigate('/')

       }
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-lg bg-gray-100 rounded-xl p-10 *
        border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          SignUp to create Account
        </h2>
        Already have an Account?&nbsp;
        <Link
          to="/Login"
          className="font-medium text-primary transition-all
               duration-200 hover:underline"
        >
          signIn
        </Link>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <from onSubmit={handleSubmit(create)}>
          <div>
            <Input
              lable="Full name"
              palceholder="enter your email"
              {...register("name", {
                required: true,
              })}
            />

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
            lable="Password"
            type="password"
            placeholder="enter your password"
            {...register("password",{
                required: true,
            })}
            />

            <Button
            className="w-full"
            type="submit">
                Create Account
            </Button>
          </div>
        </from>
      </div>
    </div>
  );
}

export default Singup;

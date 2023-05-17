import "./App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaFacebookF} from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUserId } from "./store/features/userSlice";
import { useFormik } from "formik";
import { loginSchema } from "./validation";

function App() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({});
  const dispatch=useDispatch()
  // const accessToken=useSelector(store=> store.user.userId)

 



  // const initialValues = {
  //   email: "",
  //   password: "",
  // };
  // const { data , errors, touched, handleBlur, handleChange, handleSubmit } =
  // useFormik({
  //   initialValues,
  //   validationSchema: loginSchema,
  //   onSubmit: (data,action) => {
      
  //     if (Object.keys(errors).length === 0  ) {
  //       // LoginUser(data)        
  //     }
  //     action.resetForm();
  //   }
  // });
  // console.log(errors,'errors',data,'data')


  const LoginUser = async (e) => {
    e.preventDefault();
    console.log(values,'values')
    const {data}=await axios.post('http://localhost:4000/login',
      values, 
      {headers: { "Content-Type": "application/json" }}
      )
      dispatch(setUserId(data))
  };



  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="bg-purple-700 min-h-screen flex items-center justify-center">
        <div className="bg-white flex  shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-1/2 px-8 md:px-16 shadow-lg">
            <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>

            <div className="mt-1 text-xs flex justify-between items-center text-[#002D74] cursor-pointer">
              <p>Doesn't have an account yet?</p>

              <p
                className="py-2 px-5 text-purple-700 hover:scale-110 duration-300"
                onClick={() => {}}
              >
                Sign up
              </p>
            </div>

            <form className="flex flex-col gap-2" onSubmit={LoginUser}>
              <label htmlFor="" className="font-semibold">
                Email Address
              </label>
              <input
                className="p-2 rounded-md border"
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="off"
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
                // value={data.email}     
                // onChange={handleChange}
                // onBlur={handleBlur}
              />

              {/* <p className="block text-red-700 text-sm font-bold mb-2">
                {formError.email}
              </p> */}

              <div className="flex">
                <label htmlFor="" className="font-semibold">
                  Password
                </label>
                <p
                  className="py-1 pl-16 text-purple-700 text-xs  hover:scale-110 duration-300"
                  onClick={() => {}}
                >
                  {/* <Link> */}
                  Forgot Password
                  {/* </Link> */}
                </p>
              </div>

              <input
                className="p-2 rounded-md border w-full"
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
                // value={data.values.password}     
                // onChange={handleChange}
                // onBlur={handleBlur}
              />
              <p className="block text-red-700 text-sm font-bold mb-2">
                {formError.password}
              </p>
              <button className="bg-[#002D74] rounded-md text-white py-2 hover:scale-105 duration-300">
                LOGIN
              </button>
            </form>

            <div className="flex mb-5 ">
              <button
                className="bg-white border-2 py-2 w-full rounded-md mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-red-500 "
                onClick={handleGoogleSignIn}
              >
                <svg
                  className="mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="25px"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                </svg>
                Google
              </button>

              <button className="bg-white border-2 py-2 w-full rounded-md mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-blue-500 ml-3">
                
                <FaFacebookF/>
                Facebook
              </button>
            </div>
          </div>

          <div className="md:block hidden w-1/2">
            <img className="" src="/images/icon.png" alt="loginImage" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

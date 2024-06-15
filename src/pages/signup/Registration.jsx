import React, { useState } from "react";
import axios from "axios";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumbs from "../../components/utils/Breadcrumbs";
import { IoEye } from 'react-icons/io5';
import { Link, useNavigate } from "react-router-dom";

export default function Registration() {
  const [show, setShow] = useState(false);
  const handleShowPass = () => {
    setShow(!show);
  };
  const [registerData, setRegisterData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    telephone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/athentication/registration",
        registerData
      );
      console.log("Response:", response.data);
      // Handle success response here
      toast.success('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce
      }).then(() => {
        navigate('/asasas'); 
      })
    } catch (error) {
      console.error("Error:", error.message);
      // Handle error here
    }
  };

  return (
    <div className=" max-w-container mx-auto">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      {/* <Pagetitle></Pagetitle> */}
      <Breadcrumbs></Breadcrumbs>

      <div className=" mx-auto font-[sans-serif] text-[#333] p-6">

        <div className="mb-12 mx-auto text-center">
          <h3 className="text-3xl font-extrabold"> Sign up into your account</h3>
          <p className="text-sm mt-4 ">Already have an account <Link to="/login" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Login here</Link></p>
        </div>

        <form>
          <div className="grid sm:grid-cols-2 gap-y-7 gap-x-12">
            <div>
              <label className="text-sm mb-2 block">First Name</label>
              <input
                onChange={handleChange}
                required
                value={registerData.firstname}
                name="firstname"
                type="text"
                className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                placeholder="Enter name"
              />
            </div>
            <div>
              <label className="text-sm mb-2 block">Last Name</label>
              <input
                onChange={handleChange}
                required
                value={registerData.lastname}
                name="lastname"
                type="text"
                className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                placeholder="Enter last name"
              />
            </div>
            <div>
              <label className="text-sm mb-2 block">Email Id</label>
              <input
                onChange={handleChange}
                required
                value={registerData.email}
                name="email"
                type="text"
                className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label className="text-sm mb-2 block">Mobile No.</label>
              <input
                onChange={handleChange}
                required
                value={registerData.telephone}
                name="telephone"
                type="tel"
                className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                placeholder="Enter mobile number"
              />
            </div>
            <div className="relative">
              <label className="text-sm mb-2 block ">Password</label>
              <input
                onChange={handleChange}
                required
                value={registerData.password}
                name="password"
                type={show ? "text" : "password"}
                className="bg-gray-100  w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                placeholder="Enter password"
              />
              {show ? (
                <IoEye
                  onClick={handleShowPass}
                  className="absolute right-3 top-[55%] text-xl"
                />
              ) : (
                <IoMdEyeOff
                  onClick={handleShowPass}
                  className="absolute right-3 top-[55%] text-xl"
                />
              )}
            </div>
          </div>
          <div className="!mt-10">
            <button
              onClick={handleSubmit}
              type="submit"
              className="min-w-[150px] py-3 px-4 text-sm font-semibold rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

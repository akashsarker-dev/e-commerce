import React, { useState } from "react";
import Pagetitle from "../../components/utils/Pagetitle";
import Breadcrumbs from "../../components/utils/Breadcrumbs";
import Formtitle from "../../components/utils/Formtitle";
import Inputtitle from "../../components/utils/Inputtitle";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { loginInfo } from "../../slices/userSlice";

export default function Login() {
  const [show ,setShow] = useState(false)
  const handleShowPass = ()=>{
    setShow(!show)
  }
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",  
    password: "",
  });
  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/v1/athentication/login", loginData);
      console.log(response.data); 

      if (response.data.error) {

      toast.warn(`${response.data.error}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
      } else {
        toast.success(`${response.data.success}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          })
          dispatch(loginInfo(response.data)) 
          localStorage.setItem('user', JSON.stringify(loginInfo(response.data)))

          setTimeout(() => {
            navigate("/"); // Replace with your desired navigation path
          }, 3000);
          }
        
      
    } catch (error) {
      
      console.log(error);
    }
  }
  
  return (
    <div className=" max-w-container mx-auto">
      <Pagetitle></Pagetitle>
      <Breadcrumbs></Breadcrumbs>
      {/* <Formtitle title="Returning Customer" /> */}

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

      <div className=" text-[#333]">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div  className="grid md:grid-cols-2 items-center gap-4  w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md ">
          <div className="md:max-w-md w-full sm:px-6 py-4">
            <form>
              <div className="mb-12">
                <h3 className="text-3xl font-extrabold">Sign in</h3>
                <p className="text-sm mt-4 ">Don't have an account <Link to="/registration" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link></p>
              </div>
              <div>
               <Inputtitle title={"Email address"}></Inputtitle>
                <div className="relative flex items-center">
                  <input onChange={(e)=>setLoginData({...loginData, email: e.target.value})} value={loginData.email} name="email" type="email" required className="w-full text-sm border-b border-gray-300 focus:border-[#333]  py-3 outline-none" placeholder="Enter email"/>
                 
                </div>
              </div>
              <div className="mt-8">
              <Inputtitle title={"Password"}></Inputtitle>
                <div className="relative flex items-center">
                  <input onChange={(e)=>setLoginData({...loginData, password: e.target.value})} value={loginData.password} name="password"  type={show ? "text" : "password"} required className="w-full text-sm border-b border-gray-300 focus:border-[#333] py-3 outline-none" placeholder="Enter password" />
                  {
                    show ?
                    <IoEye onClick={handleShowPass} className="w-[18px] h-[18px] absolute right-2 cursor-pointer"></IoEye>
                    :
                  <IoMdEyeOff onClick={handleShowPass} className="w-[18px] h-[18px] absolute right-2 cursor-pointer"></IoMdEyeOff>
                  }
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 mt-5">
                
                <div>
                  <a href="jajvascript:void(0);" className="text-blue-600 font-semibold text-sm hover:underline">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className="mt-12">
                <button onClick={handleLogin} type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Sign in
                </button>
              </div>
            </form>
          </div>
          <div className="md:h-full hidden sm:block max-md:mt-10 bg-[#000842] rounded-xl lg:p-12 p-8">
            <img src="https://readymadeui.com/signin-image.webp" className="w-full h-full object-contain" alt="login-image" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

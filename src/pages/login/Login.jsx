import React, { useState } from "react";
import Pagetitle from "../../components/utils/Pagetitle";
import Breadcrumbs from "../../components/utils/Breadcrumbs";
import Formtitle from "../../components/utils/Formtitle";
import Inputtitle from "../../components/utils/Inputtitle";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

export default function Login() {
  const [show ,setShow] = useState(false)

  const handleShowPass = ()=>{
    setShow(!show)
  }
  return (
    <div className=" max-w-container mx-auto">
      <Pagetitle></Pagetitle>
      <Breadcrumbs></Breadcrumbs>
      {/* <Formtitle title="Returning Customer" /> */}

      <div className=" text-[#333]">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div  className="grid md:grid-cols-2 items-center gap-4  w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md ">
          <div className="md:max-w-md w-full sm:px-6 py-4">
            <form>
              <div className="mb-12">
                <h3 className="text-3xl font-extrabold">Sign in</h3>
                <p className="text-sm mt-4 ">Don't have an account <a className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</a></p>
              </div>
              <div>
               <Inputtitle title={"Email address"}></Inputtitle>
                <div className="relative flex items-center">
                  <input name="email" type="text" required className="w-full text-sm border-b border-gray-300 focus:border-[#333]  py-3 outline-none" placeholder="Enter email"/>
                 
                </div>
              </div>
              <div className="mt-8">
              <Inputtitle title={"Password"}></Inputtitle>
                <div className="relative flex items-center">
                  <input  type={show ? "text" : "password"} required className="w-full text-sm border-b border-gray-300 focus:border-[#333] py-3 outline-none" placeholder="Enter password" />
                  {
                    show ?
                    <IoEye onClick={handleShowPass} className="w-[18px] h-[18px] absolute right-2 cursor-pointer"></IoEye>
                    :
                  <IoMdEyeOff onClick={handleShowPass} className="w-[18px] h-[18px] absolute right-2 cursor-pointer"></IoMdEyeOff>
                  }
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 mt-5">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label  className="ml-3 block text-sm">
                    Remember me
                  </label>
                </div>
                <div>
                  <a href="jajvascript:void(0);" className="text-blue-600 font-semibold text-sm hover:underline">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className="mt-12">
                <button type="button" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
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

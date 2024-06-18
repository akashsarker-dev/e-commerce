import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserButton = forwardRef((props, ref) => {
  const user = useSelector(state => state.user); 
  const isLoggedIn = !!user.value; 

  const handleLogout = () => {
    localStorage.removeItem('user');

    toast.warn('Logout Successful', {
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
  
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };
  

  return (
    <>
    <div ref={ref} className="mt-7 flex flex-col w-40 bg-slate-200 absolute top-6 rounded right-0 p-3">
      
      {isLoggedIn ? (
        <div className="flex flex-col gap-3 items-start">
          {/* Render links for logged-in user */}
          <button className="hover:text-blue-500 text-xl font-semibold">
            Profile
          </button>
          <button onClick={handleLogout} className="hover:text-blue-500 text-xl font-semibold">
            Logout
          </button>
        </div>
      ) : (
        <>
        <Link className="px-5 py-2.5 rounded-lg text-center text-sm tracking-wider font-medium border  outline-none bg-blue-700  text-white  transition-all duration-300" to="/login">
        
        <button type="button"
        >
         Login </button>
          </Link>
        </>
      )}
    </div>
    </>
  );
});

export default UserButton;

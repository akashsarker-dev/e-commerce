import React from 'react'
import { Link } from 'react-router-dom'

export default function UserButton() {
    
  return (
    <div>
        <div  className=" mt-7 flex flex-col w-40 bg-slate-200  absolute top-6 rounded -left-8  p-3">
                  <Link className="hover:text-blue-500 text-xl font-semibold" to="/registration">Registration</Link>
                  <Link className="hover:text-blue-500 text-xl font-semibold" to="/login">Login</Link>
              </div>
    </div>
  )
}

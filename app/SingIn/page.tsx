import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import Link from "next/link";
export default function SIngIN() {
  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-gray-100">
  
      <div className="flex w-full max-w-6xl bg-white rounded-xl shadow-lg">
        <div className="w-1/2">
          <img
            className="w-full h-full object-cover rounded-l-xl"
            src="office-620822_640.jpg"
            alt="Office"
          />
        </div>

        <div className="w-1/2 p-8">
          <div className="flex justify-center mb-6">
          
          </div>
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Sign In</h1>

          <form>
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2" >
                Email Address
              </label>
              <div className="flex items-center border border-gray-300 rounded-full p-4 pr-2">
                <MdOutlineMailOutline className="text-gray-600 mr-3" />
                <input
                  type="email"
                  placeholder=" Email"
                  className="w-full p-2 text-gray-800 outline-none rounded-full"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2" >
                Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-full p-4 pr-2">
              <TbPasswordUser  className="text-gray-600 mr-3" />

              <input
                type="password"
                placeholder="Password"
                className= "text-gray-600 mr-3 outline-none "
              />
              </div>
            </div>

            <div className="flex justify-center mb-6">
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white rounded-full text-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign In
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500">
                Don't have an account?

                <Link href="/singup"  className="text-blue-500 hover:text-blue-700">
                  Sign Up
                </Link >

           
            </p>
          </div>
         </form>
        </div>
         </div>
        </div>
     
  );
}
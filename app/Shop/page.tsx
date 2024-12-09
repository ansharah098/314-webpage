
import React from "react";
import Navbar from "../components/Navbar/page";

export default function Shop() {
  return (
    <div>
    <Navbar />
      <div>
      <div className="bg-gray-200 w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 h-auto text-custom-purple">
        <h1 className="text-2xl sm:text-3xl text-center lg:text-left">
          Your Shopping Cart
        </h1>
        <div className="grid pt-9 grid-cols-1 lg:grid-cols-2 gap-9 ">
          <div className="border-2 p-4">
            <h1 className="text-lg font-semibold">Product</h1>

            <div className="flex justify-between mt-8">
              <div className="flex">
                <img
                  src="Product Image.png"
                  alt="Product 1"
                  className="w-20 h-20 sm:w-28 sm:h-28 " />
                <div className="ml-6">
                  <h1 className="text-base sm:text-lg ">
                    Graystone vase
                  </h1>
                  <p className="text-sm mt-3">
                    A timeless ceramic vase with a tri-color grey glaze.
                  </p>
                  <p className="mt-2">£85</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <h1 className="text-sm font-semibold sm:hidden lg:block text-lg">
                  Quantity
                </h1>
                <p className="mt-2 ">1</p>
              </div>
            </div>
            <div className="flex items-start justify-between mt-8">
              <div className="flex">
                <img
                  src="Product Image (1).png"
                  alt="Product 2"
                  className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1" />
                <div className="ml-6">
                  <h1 className="sm:text-lg ">
                    Basic white vase
                  </h1>
                  <p className=" mt-2">
                    Beautiful and simple, this is one for the classics.
                  </p>
                  <p className="mt-2 text-base ">£85</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <p className="mt-2 text-lg ">1</p>
              </div>

            </div>
          </div>

          <div className="border-2 p-4 sm:hidden lg:block">
            <h1 className="text-lg font-bold">Total</h1>
            <p className="mt-10 text-lg ">£85</p>
            <p className="mt-40 text-lg ">£85</p>
          </div>
        </div>

        <div className="mt-10 text-center lg:text-right">
          <h1 className="inline text-lg sm:text-xl font-medium mr-4">
            Subtotal
          </h1>
          <h1 className="inline text-xl sm:text-2xl font-bold">£210</h1>
          <p className="text-sm mt-4">
            Taxes and shipping are calculated at checkout
          </p>
          <button className="bg-[#2A254B] h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white">
            Go to checkout
          </button>
        </div>
       </div>
        </div>
       </div>
  );
};


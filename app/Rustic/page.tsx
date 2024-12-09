"use client"
import React, { useEffect } from "react";
import AOS from "aos";  
import "aos/dist/aos.css";
import Image from 'next/image';
import { TbTruckDelivery } from 'react-icons/tb';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";
import Link from 'next/link';

const Rustic = () => {
  const[count,setcount]=React.useState(0);
  useEffect(
    () =>{
      AOS.init({duration:800})
    }
  )
  
  

  return (

      <main>
        <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 h-auto">
              <img
                src={'Photo (1).png'}
                height={800}
                width={800}
                alt="chair"
                data-aos="fade-right"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 md:px-10 py-6 flex flex-col justify-center">
              <div>
                <p className="text-xl md:text-2xl font-semibold">The Rustic Vase</p>
                <p className="py-2 text-lg md:text-xl">$155</p>
              </div>
              <div className="text-[#505977] text-sm md:text-base">
                <h1 className="font-semibold">Description</h1>
                <div className="my-4 md:my-6">
                  <p>
                    A timeless design, with premium materials features as one of our most popular
                    and iconic pieces. The dandy chair is perfect for any stylish living space with
                    beech legs and lambskin leather upholstery.
                  </p>
                </div>
                <div className="ml-4">
                  <ul className="list-disc space-y-1">
                    <li>Premium material</li>
                    <li>Handmade upholstery</li>
                    <li>Quality timeless classic</li>
                  </ul>
                </div>
                <div>
                  <div className="my-8">
                    <h1 className="font-semibold">Dimensions</h1>
                  </div>
                  <div className="flex gap-12 md:gap-20 text-sm md:text-base">
                    <div>
                      <h1>Height</h1>
                      <p>110cm</p>
                    </div>
                    <div>
                      <h1>Width</h1>
                      <p>75cm</p>
                    </div>
                    <div>
                      <h1>Depth</h1>
                      <p>50cm</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-center mt-8">
                    <div className="flex items-center gap-4">
                      <h1>Amount:</h1>
                      <button className="flex gap-4 bg-[#F5F5F5] rounded-md px-4 py-2">
                        <span>+ </span>
                         1
                       <span>-</span>
                      </button>
                    </div>
                    <button className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white mt-4 md:mt-0">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        
          <h1 className="text-xl md:text-2xl font-semibold mt-12 text-[#505977]">You might also like</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="w-full">
                <img
                  src={`Photo (4).png`}
                  height={700}
                  width={700}
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
            
                <div className="mt-4 text-[#2A254B]">
                  <p className="py-3" >$250</p>
                  <p className="py-3">The Dendy Chair</p>
                  
                </div>
              </div>

              <div className="w-full">
                <img
                  src={`Photo (1).png`}
                  height={700}
                  width={700}
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
            
                <div className="mt-4 text-[#2A254B]">
                  <p className="py-3" >$125</p>
                  <p className="py-3">The rusty vase</p>
                </div>
              </div>
              
              <div className="w-full">
                <img
                  src={`Photo (5).png`}
                  height={700}
                  width={700}
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
            
                <div className="mt-4 text-[#2A254B]">
                  <p className="py-3" >$155</p>
                  <p className="py-3">chair</p>
                </div>
              </div>
              <div className="w-full">
                <img
                  src={`  Photo (3).png`}
                  height={700}
                  width={700}
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
            
                <div className="mt-4 text-[#2A254B]">
                  <p className="py-3" >$399</p>
                  <p className="py-3">The lucky lamp</p>
                </div>
              </div>
          
          </div>

          <div className="my-10 flex justify-center">
       
  <button className=" py-3 px-6 rounded-md text-[#2A254B]">
    View collection
  </button>

           
          </div>
          <div className="my-10 flex flex-col md:flex-row gap-8 text-sm md:text-base">
 
 <div className="flex items-center gap-4 bg-[#F5F5F5] p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
   <TbTruckDelivery  className="text-[#2A254B] w-[30px] h-[30px]" />
   <div>
     <h2 className="font-semibold text-[#2A254B]">Next day as standard</h2>
     <p className="text-[#505977]">Order before 3pm and get your order the next day as standard.</p>
   </div>
 </div>

 
 <div className="flex items-center gap-4 bg-[#F5F5F5] p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
   <IoIosCheckmarkCircleOutline  className="text-[#2A254B] w-[30px] h-[30px]" />
   <div>
     <h2 className="font-semibold text-[#2A254B]">Made by true artisans</h2>
     <p className="text-[#505977]">Hand-crafted goods made with real passion and craftsmanship.</p>
   </div>
 </div>


 <div className="flex items-center gap-4 bg-[#F5F5F5] p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
   <MdOutlinePriceChange className="text-[#2A254B] w-[30px] h-[30px]" />
   <div>
     <h2 className="font-semibold text-[#2A254B]">Unbeatable prices</h2>
     <p className="text-[#505977]">For our material and quality, you won’t find better prices anywhere.</p>
   </div>
 </div>

 
 <div className="flex items-center gap-4 bg-[#F5F5F5] p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
   <LuSprout className="text-[#2A254B] w-[30px] h-[30px]" />
   <div>
     <h2 className="font-bold text-[#2A254B]">Recycled packaging</h2>
     <p className="text-[#505977]">We use 100% recycled packaging to ensure our footprint is manageable.</p>
   </div>
     </div>
 </div>
        </div>
      </main>
  
  );
};

export default Rustic;
import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";

export default function bnew () {
  return (
  
      <main>
        <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
          <h1 className="text-center text-xl md:text-2xl font-bold">
            What makes our brand different
          </h1>

          <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg">
            <div className="flex flex-col  md:w-[25%] p-4  rounded-lg">
              <TbTruckDelivery  className="text-[#2A254B] w-[30px] h-[30px]" />
              <p className="py-4 font-bold">Next day as standard</p>
              <p>Order before 3pm and get your order the next day as standard.</p>
            </div>

            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <IoIosCheckmarkCircleOutline  className="text-[#2A254B] w-[30px] h-[30px]"/>
              <p className="py-4 font-bold">Made by true artisans</p>
              <p>Hand-crafted goods made with real passion and craftsmanship.</p>
            </div>

            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <MdOutlinePriceChange className="text-[#2A254B] w-[30px] h-[30px]"/>
              <p className="py-4 font-semibold">Unbeatable prices</p>
              <p>For our material and quality, you won't find better prices anywhere.</p>
            </div>

            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <LuSprout  className="text-[#2A254B]  w-[30px] h-[30px]"/>
              <p className="py-4 font-bold">Recycled packaging</p>
              <p>We use 100% recycled packaging to ensure our footprint is manageable.</p>
            </div>
          </div>
        </div>
      </main>
    
  );
};


'use client';
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { IoIosContact } from 'react-icons/io';
import { IoMenu, IoClose } from 'react-icons/io5';
import Link from 'next/link';

export default function Navbar () {
  

  return (
    <div className="p-4 w-full h-auto">
      <div className="flex justify-between items-center py-2">
        <div className="sm:hidden md:block">
          <CiSearch  className="text-black w-[25px] h-[25px]" />
        </div>

        <h1 className="text-[#22202E] text-xl md:text-2xl md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          Avion
        </h1>

        <div className="sm:hidden md:flex gap-3">
          <Link href="/Shop">
            <IoCartOutline  className="text-[#2A254B] w-[25px] h-[25px]" />
          </Link>
          <Link href="/SingIn">
          <IoIosContact className="text-[#2A254B] w-[25px] h-[25px]" />
          </Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <CiSearch className="text-[#2A254B] w-[25px] h-[25px]" />
          <button
            className="text-2xl focus:outline-none z-30">
            
          </button>
        </div>
      </div>

      <hr />

      <header>
<div className="flex flex-col md:flex-row justify-center pt-[30px] md:items-center gap-4 md:gap-8 text-[#726E8D] ">
          <p>Plant pots</p>
          <p>Ceramics</p>
          <p>Tables</p>
          <p>Chairs</p>
          <p>Crockery</p>
          <p>Tableware</p>
          <p>Cutlery</p>
        </div>
      </header>
    </div>
  );
};


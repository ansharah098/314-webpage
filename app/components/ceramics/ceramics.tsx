import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
export default function Ceramics() {
  return (
    
         <main>
         <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
          <h1 className="text-2xl font-bold">New Ceramics</h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="w-full h-auto">
            <Link href="/Dandy">
              <img
                src={'Photo (4).png'}
                height={700}
                width={700}
                alt="chair"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              /></Link>
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Dendy Chair</p>
                <p>$250</p>
              </div>
            </div>

            <div className="w-full h-auto">
              <Link href="Rustic">
              <img
                src={'Photo (1).png'}
                height={600}
                width={600}
                alt="vase"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              </Link>
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">Rustic VaseSet</p>
                <p>$155</p>
              </div>
            </div>

            <div className="w-full h-auto">
              <Link href="Silk">
              <img
                src={'Photo (2).png'}
                height={700}
                width={700}
                alt="silky vase"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              </Link>
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Silky Vase</p>
                <p>$125</p>
              </div>
            </div>

            <div className="w-full h-auto">
              <Link href="/Luck">
              <img
                src={'Photo (3).png'}
                height={700}
                width={700}
                alt="lamp"
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              </Link>
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Lucky Lamp</p>
                <p>$399</p>
              </div>
              </div>
              </div>

          <div className="my-10 flex justify-center items-center">
            <button className="bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]">
              View collection
            </button>
        </div>
         </div>
         </main>
  )
}


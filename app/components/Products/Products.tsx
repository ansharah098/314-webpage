'use client'
import Link from 'next/link';
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';

const Product = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/productlisting'); 
  };

  return (
    <>
      <section>
        <div className='px-8 py-12 text-[#2A254B] mt-12'>
          <h1 className='text-2xl'>Our popular products</h1>

          <div className='flex flex-col md:flex-row gap-8 mt-8'>
            
            <div className='w-[305px] h-[462px] group'>
              <img
                src={'Photo (4).png'}
                height={800}
                width={800}
                alt='sofa'
                className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The popular suede sofa</p>
                <p>$980</p>
              </div>
            </div>

            <div className='w-[305px] h-[462px] group'>
            
            <Link href="/Dandy" >
              <img
                src={'Photo (4).png'}
                height={375}
                width={305}
                alt='chair'
                className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
              /></Link>
              <div className='mt-4 text-[#2A254B]'>
              
                <p className='py-2'>The Dandy chair</p>
               
                <p>$250</p>
              </div>
            </div>

            <div className='w-[305px] h-[462px] group'>

            <Link href="/Listing" >

              <img
                src={'Photo (5).png'}
                height={375}
                width={305}
                alt='chair'
                className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
              /></Link>
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The chair</p>
                <p>$120</p>
              </div>
            </div>

          </div>

          <div className='my-10 flex justify-center items-center'>
          <div className="my-10 flex justify-center">
  
          <button className=" py-3 px-6 rounded-md text-[#2A254B]">
           View Collection
          </button>
        

</div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Product;
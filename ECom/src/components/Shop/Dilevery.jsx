import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdSupportAgent } from "react-icons/md";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { FaGlassMartiniAlt } from "react-icons/fa";

const Dilevery = () => (
    <section className='bg-customLinen py-14'>
      <div className='flex flex-row justify-between items-center mx-10'>
          <div className='flex flex-row justify-between items-center'>
            <FaGlassMartiniAlt className='w-20 h-8 font-semibold'/>
            <div>
              <h4 className='font-poppins font-semibold text-[16px]'>High Quality</h4>
              <p className='font-poppins font-normal text-[12px] text-gray-500'>crafted from top materials</p>
            </div>
          </div>

          <div className='flex flex-row justify-between items-center'>
            <HiOutlineBadgeCheck className='w-20 h-8 font-semibold'/>
            <div>
              <h4 className='font-poppins font-semibold text-[16px]'>Warranty Protection</h4>
              <p className='font-poppins font-normal text-[12px] text-gray-500'>Over 2 years</p>
            </div>
          </div>

          <div className='flex flex-row justify-between items-center'>
             <LiaShippingFastSolid className='w-20 h-8 font-semibold'/>
            <div>
              <h4 className='font-poppins font-semibold text-[16px]'>Free Shipping</h4>
              <p className='font-poppins font-normal text-[12px] text-gray-500'>Order over 150 $</p>
            </div>
          </div>

          <div className='flex flex-row justify-between items-center'>
            <MdSupportAgent className='w-20 h-8 font-semibold'/>
            <div>
              <h4 className='font-poppins font-semibold text-[16px]'>24 / 7 Support</h4>
              <p className='font-poppins font-normal text-[12px] text-gray-500'>Dedicated support</p>
            </div>
          </div>
      </div>
    </section>
  )
export default Dilevery
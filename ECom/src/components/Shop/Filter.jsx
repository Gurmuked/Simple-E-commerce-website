import React from 'react'
import { PiCirclesFourFill } from "react-icons/pi";
import { RiEqualizerLine } from "react-icons/ri";
import { TfiLayoutAccordionSeparated } from "react-icons/tfi";

const Filter = () => (
    <section className='bg-customLinen py-8'>
      <div className='flex justify-between items-center mx-10'>

        <div className='flex justify-between  items-center'>
            <RiEqualizerLine className=' w-8 h-4'/>
            <p className='mx-3'>Filter</p>
            <PiCirclesFourFill className=' w-8 h-4'/>
            <TfiLayoutAccordionSeparated className='mx-3 w-8 h-4'/>
            <p className='pl-4 border-l-2 border-h border-gray-700 items-center text-center'>Showing 1–16 of 32 results</p>
        </div>

        <div className='flex items-center'>
          <div>
            <label htmlFor="show" className='font-poppins font-normal text-[14px] text-gray-900 mr-2'>Show :</label>
            <input type="text" placeholder='16' className='w-16 pl-2'/>
          </div>
          <div className='ml-4'>
            <label htmlFor="show" className='font-poppins font-normal text-[14px] text-gray-900 mr-2'>Short by :</label>
            <input type="text" placeholder='Default' className='w-18 pl-2'/>
          </div>
        </div>

      </div>
    </section>
  )

export default Filter
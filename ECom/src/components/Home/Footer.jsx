import React from 'react'

 const Footer = ({border}) => (
    <section className={`w-[100%] mx-auto  flex flex-col justify-center items-start ${border !== "1" ? 'border-t-2 border-gray' : " "}`}>
      <div className='w-[90%] mx-auto  flex flex-row justify-center items-start text-cnter mb-10 mt-6 '>
        <div className='w-[25%] pl-8 leading-10'>
          <h4 className='font-poppins font-bold text-[24px] mb-8'>Funiro</h4>
          <p className='font-poppins font-normal text-[16px] text-gray-700'>400 university suite 200 coral <br /> Gables, <br /> Fl 33134 USA </p>
        </div>

      <div className='w-[20%] ml-5 pl-2'>
        <h4  className='font-poppins font-normal text-gray-600 text-[16px] mb-4'>Links</h4>
        <ul className='font-poppins font-normal text-black text-[16px] leading-10 w-auto'>
          <li className='cursor-pointer '>Home</li>
          <li className='cursor-pointer '>Shop</li>
          <li className='cursor-pointer '>About</li>
          <li className='cursor-pointer '>Contact</li>
        </ul>
      </div>

      <div className='w-[20%] ml-5 pl-2'>
        <h4 className='font-poppins font-normal text-gray-600 text-[16px] mb-4'>Help</h4>
        <ul className='font-poppins font-normal text-black text-[16px] leading-10 w-auto'>
          <li className='cursor-pointer '>Payment Options</li>
          <li className='cursor-pointer '>Returns</li>
          <li className='cursor-pointer '>Privacy policies</li>
        </ul>
      </div>

      <div className='w-[30%] ml-5 mr-5 pl-2'>
        <h4 className='font-poppins font-normal text-gray-600 text-[16px] mb-4'>Newsletter</h4>
        <div className='flex flex-row'>
          <input type="email" placeholder='Enter your email' className=' border-b-4 border-black placeholder:text-[16px] pl-1 pr-6'/>
          <h4 className='font-poppins font-semibold text-[24px] ml-4 border-b-4 border-solid border-black cursor-pointer'>Subscribe</h4>
        </div>
      </div>
    </div>

      <p className='w-[85%] font-poppins font-normal text-[18px] text-gray-700 mx-auto pl-2 pt-4 my-5 border-t-2 border-gray'>
        2023 Furino. All rights reserved
      </p>

    </section>
  )
export default Footer;
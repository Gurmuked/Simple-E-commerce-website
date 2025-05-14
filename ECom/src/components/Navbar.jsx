import React from 'react'
import { BsPersonExclamation } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () =>(
    <section className='w-[100%] h-[70px] flex flex-row justify-between items-center ml-10 mr-16'>
      <div  className='w-[20%] flex justify-start items-center'>
        <img src="../src/assets/logo.png" alt="Logo" className='mr-2 w-34 h-auto'/>
        <h4 className='font-poppins font-bold text-[26px] text-black'>Furniro</h4>
      </div>

      <div className='w-[30%] flex justify-center items-center'>
        <ul className='w-[100%] flex justify-between items-center'>
          <li className='font-poppins font-normal text-[20px] text-black cursor-pointer' >Home</li>
          <li className='font-poppins font-normal text-[20px] text-black cursor-pointer'>Shop</li>
          <li className='font-poppins font-normal text-[20px] text-black cursor-pointer'>About</li>
          <li className='font-poppins font-normal text-[20px] text-black cursor-pointer'>Contact</li>
        </ul>
      </div>

      <div  className='w-[20%] flex justify-start items-center'>
        <BsPersonExclamation className='w-6 h-auto mx-4 cursor-pointer'/>
        <BiSearch className='w-6 h-auto mx-4 cursor-pointer'/>
        <CiHeart className='w-6 h-auto mx-4 cursor-pointer'/>
        <AiOutlineShoppingCart className='w-6 h-auto mx-4 cursor-pointer'/>
      </div>
    </section>
  )

export default Navbar;
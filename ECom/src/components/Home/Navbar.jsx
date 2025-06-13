import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { BsPersonExclamation } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import {nav} from '../constants/Data'

const Navbar = () =>{

  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return(
  <section className='w-[100%] py-6 '>
    <div className='kee w-[100%] flex flex-row justify-between items-center'>
      <div  className='w-[20%] flex justify-start items-center ml-8'>
        <img src="../src/assets/logo.png" alt="Logo" className='mr-2 w-34 h-auto'/>
        <h4 className='font-poppins font-bold text-[26px] text-black'>Furniro</h4>
      </div>
      <div className='w-[30%] hidden xs:flex justify-center items-center'>
        <ul className='w-[100%] flex justify-between items-center'>
          {
            nav.map((item, idx) => (
              <li key={idx} className='font-poppins font-normal text-[20px] text-black cursor-pointer' >
                <Link to={item.to || "/"}>{item.label || item}</Link>
              </li>
            ))
          }
        </ul>
      </div>
      <div className='w-[20%] hidden xs:flex justify-center items-center'>
        <BsPersonExclamation className='w-6 h-auto mx-4 cursor-pointer'/>
        <BiSearch className='w-6 h-auto mx-4 cursor-pointer'/>
        <CiHeart className='w-6 h-auto mx-4 cursor-pointer'/>
        <Link to="/compare2">
        <AiOutlineShoppingCart className='w-6 h-auto mx-4 cursor-pointer'/>
        </Link>
      </div>
      <div className='w-[20%] xs:hidden flex justify-end items-center mr-4'>
        <RiMenu3Fill className='w-6 h-auto cursor-pointer' onClick={toggleMenu}/>
      </div>
    </div>

    <div className={`guu w-[100%] absolute top-0 right-0 left-0 bg-slate-800 bg-opacity-70 justify-start text-start items-center mx-auto ${
          isMenuOpen ? 'block' : 'hidden'} `}>
      <div className='relative w-[100%] flex flex-col justify-center items-center leading-10 mt-10'>
        <ul className='w-[100%] flex flex-col justify-between items-center leading-10'>
          {
            nav.map((item, idx) => (
              <li key={idx} className='font-poppins font-md text-[28px] text-white cursor-pointer mb-4' >
                <Link to={item.to || "/"}>{item.label || item}</Link>
              </li>
            ))
          }
        </ul>
        <div>
          <MdClose onClick={toggleMenu} className='absolute top-0 right-8 w-10 h-auto my-4 mt-0 cursor-pointer text-white'/>
        </div>
      </div>
    </div>
  </section>
  )
}
export default Navbar;
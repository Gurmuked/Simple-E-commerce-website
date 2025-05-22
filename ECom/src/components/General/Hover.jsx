import React from 'react'
import Button from '../Home/Button';
import { CiHeart } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";


 const Hover = () => {
  return (
    <section>
      <div className='w-[280px] h-[350px] bg-gray-600 bg-opacity-50 flex flex-col'>
        <div>
          <Button value= "Add to Cart"/>
        </div>
        <div>
          <CiHeart />
          <IoShareSocialOutline />
        </div>
      </div>
    </section>
  )
}
export default Hover;
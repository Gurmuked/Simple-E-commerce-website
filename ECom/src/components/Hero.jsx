import React from 'react';
import Button from './Button';

const Hero = () => (
  <section className="w-full h-[80vh]">
    <div className={`bg-hero-pattern bg-cover bg-center h-[100%] rounded-lg`}>
      {/* <div className='absolute top-[20%] right-10 transfrom bg-gray-400  w-[500px] px-8 py-8  rounded-lg'>
        <h4 className='font-poppins font-semibold text-[16px] '>New Arrival</h4>
        <h2 className='font-poppins font-bold text-yellow-700 text-[28px]'>
          Discover Our <br /> New Collection
        </h2>
        <p className='font-poppins font-normal text-[14px] mb-6 mt-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ui elit failure. luctus nec
          ullomcorper motttis.
        </p>
        <Button value="Buy Now" style="bg-yellow-600 text-white" />
      </div> */}
    </div>
  </section>
);

export default Hero;
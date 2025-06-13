import React from 'react'

 const Hero = (props) => {
   return (
    <section className='flex flex-col justify-center bg-hero-pattern-shop w-full h-[40vh] text-center'>
      <img src={props.img} alt="" width={50} height={50} className='mx-auto mb-4'/>
      <h1 className='text-black font-poppins text-[28px]'>{props.title}</h1>
      <p>
        <span className='text-black font-poppins text-[18px] '>{props.link1} &#x3e;</span> 
        <span className='text-gray-600 font-poppins text-[18px] ml-1'>{props.link2}</span>
      </p>
    </section>
  )
}

export default Hero;
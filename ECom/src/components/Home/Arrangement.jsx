import React from 'react'
import {arrangement} from '../../constants/Gallery';

const Arrangement = () =>(
    <section className='flex flex-col w-[100%] justify-center items-center mt-16 mb-20 '>
      <div className='flex flex-col justify-center items-center text-center'>
        <p className='font-poppins font-normal text-[18px]'>share your setup with</p>
        <h4 className='font-poppins font-bold text-[28px] leading-10'>#FuniroFurniture</h4>
      </div>

      {arrangement.map(({val}) => (
        <div className='flex flex-row justify-center items-center w-[98%] h-[500px]'>

          <div className='w-[35%] h-[500px] flex flex-col justify-center items-center'>
            <div className='w-[100%] h-[100%] flex flex-row justify-center items-end mb-4'>
              <img 
                 src={val.img} 
                 alt="image"  
                 className='w-[15%] h-[242px] mr-4'/>
              <img 
                src={val.img1} 
                alt="images" 
                className='w-[100%] h-[180px]'/>
            </div>

            <div className='w-[100%] h-[100%] flex flex-row justify-center items-start'>
              <img 
                src={val.img2} 
                alt="image" 
                className='w-[40%] h-[242px] mr-4'/>
              <img 
                src={val.img3} 
                alt="images" 
                className='w-[100%] h-[180px]'/>
            </div>
          </div>

          <div className='w-[25%] h-[350px] flex flex-row items-center mx-10'>
            <img 
              src={val.img4} 
              alt="image" 
              className='w-[100%] h-[80%]'/>
          </div>

          <div className='w-[35%] h-[500px] flex flex-col justify-center items-center'>
            <div className='w-[100%] h-[100%] flex flex-row justify-center items-end mb-4'>
              <img 
                src={val.img5} 
                alt="image" 
                className='w-[100%] h-[180px] mr-4'/>
              <img 
                src={val.img6} 
                alt="images" 
                className='w-[50%] h-[242px]'/>
            </div>
            <div className='w-[100%] h-[100%] flex flex-row justify-start items-start'>
            <img 
              src={val.img7} 
              alt="image"
              className='w-[30%] h-[242px] mr-4'/>
            <img 
              src={val.img9} 
              alt="images" 
              className='w-[50%] h-[180px]'/>
            </div>
          </div>
        </div>
      ))}


    </section>
  )

export default Arrangement;
import React from 'react'
import Button from './Button';
import { inspiration } from '../constants/Gallery';

const Inspiration = () =>(
    <section className=' w-[90%]'>
      <div className='flex flex-row w-[90%] flex-wrap justify-center items-center'>
        <div className='w-[33%]'>
          <h3 className='font-poppins font-bold text-[32px] text-start items-center'><span>50+</span> Beautiful rooms inspiration</h3>
          <p className='font-poppins font-medium text-[18px] text-start items-center mb-3'>Our designer already made a lot of beautiful prototype of rooms that inspire you</p>

          <Button value="Explore More" style="bg-yellow-600 text-white"/>
        </div>
        <div className='w-[33%]'>
          <img src='../src/assets/bedroom.jpg' alt="inner peace" className='w-[100%] h-[300px]'/>
          <div>
            <p>01 ----- Rest Room</p>
            <h4>Inner peace</h4>
          </div>
        </div>
        <div className='flex flex-row overflow-hidden'>
          {
            inspiration.map(({img, title, id }) => (
              <div key={id} className={`flex flex-col justify-center items-center text-center w-[33%] object-contain overflow-hidden`}>
                <img src={img} alt={title} className={`w-[100%] h-[400px] rounded-md mb-10  `} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
export default Inspiration ;
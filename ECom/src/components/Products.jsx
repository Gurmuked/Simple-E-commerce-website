import React from 'react'
import Button from './Button';
import { products } from '../constants/Gallery';

 const Products = () =>(
    <section className='w-[90%] mx-auto' >
      <div className='flex flex-col w-[100%] justify-center items-center text-center mt-16 mb-10'>
        <h1 className='font-poppins font-semibold self-center text-[24px] '>Our Products</h1>

        <div className={`flex flex-row w-[100%] flex-wrap justify-center items-center mb-10`}>
          {
           products.map(({img, title, subtitle, price, delPrice, id, index }) => (
            <div key={id} className={`flex flex-col justify-center items-center text-start w-[22%] rounded-lg bg-gray-200 mt-10 ${index !== img.length -1 ? 'mr-5' : 'mr-0'}`}>
                <img src={img} alt={title} className={`w-[100%] h-[250px] rounded-lg`}/>
              <div className='flex flex-col justify-left items-left h-[100px] w-[100%] pl-4 mt-3'>
                <h4 className='font-poppins font-semibold text-[20px]' >{title}</h4>
                <p className='font-poppins font-normal text-[16px]' >{subtitle}</p>
                <h4 className={`font-poppins font-semibold text-[20px] flex flex-row justify-between leading-4`}>
                  <span>Rp {price}</span>
                  <del className="text-gray-500 mr-4 "> {delPrice}</del>
                </h4>
              </div>
            </div>
          ))
          }
        </div>
        <Button value="Show More" style="bg-white text-yellow-500 font-bold text-[20px] border-2 border-yellow-500 w-60" />
      </div>
    </section>
  )
export default Products;
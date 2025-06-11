import React, { useState } from 'react'
import Product from '../Shop/AllProducts';
import Button from '../Home/Button';

const Related = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className='flex flex-col justify-center items-center w-[100%] mb-10'>
      <h4 className='font-poppins font-normal text-[24px] text-cnter'>
        Related Products
      </h4>
      <Product showCount={showAll ? 16 : 4}/>
      {!showAll && (
        <Button
          value="Show More"
          style="bg-white text-yellow-500 font-bold text-[20px] border-2 border-yellow-500 w-60"
          onClick={() => setShowAll(true)}
        />
      )}
      {showAll && (
        <Button
          value="Show Less"
          style="bg-white text-yellow-500 font-bold text-[20px] border-2 border-yellow-500 w-60 mt-4"
          onClick={() => setShowAll(false)}
        />
      )}
    </section>
  )
}

export default Related;
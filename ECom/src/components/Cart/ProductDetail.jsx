import React from 'react'


const row1= ["Product", "Price", "Quantity", "subtotal"]
const row2= ["ASgaad sofa", "Rs. 25,000", 1, "Rs. 25,00"]

const ProductDetail = () => {
  return (
    <section className='flex flex-col justify-between'>
      <div className='flex  text-center my-10'>
        {
        row1.map((item) =>
        <div className='mx-[34px]'>{item}</div>
        )}
      </div>
      <div className='grid grid-flow-col 6 ml-20 mr-20 mb-40'>
        <img src="../src/assets/logo.png" alt="" />
        {
        row2.map((item) =>
        <p>{item}</p>
        )}
        <img src="../src/assets/logo.png" alt="" />
      </div>
    </section>
  )
}

export default ProductDetail ;
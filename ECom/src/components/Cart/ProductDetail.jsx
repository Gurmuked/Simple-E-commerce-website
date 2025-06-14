import { AiOutlineDelete } from "react-icons/ai";


const row1= ["Product", "Price", "Quantity", "subtotal"]
const row2= ["ASgaad sofa", "Rs. 25,000", 1, "Rs. 25,00"]

const ProductDetail = () => {
  return (
    <section className='w-[100%] flex flex-col justify-between'>
      <div className='flex justify-center bg-beige text-center my-10 w-[100%] h-[60px] items-center'>
        {
        row1.map((item, index) =>
        <p key={index} className='mx-[60px]'>{item}</p>
        )}
      </div>
      <div className='grid grid-flow-col 6 mx-10 mb-40 w-[100%]'>
        <img src="../src/assets/logo.png" alt="" />
        {
        row2.map((item, index) =>
        <p key={index}>{item}</p>
        )}
        <AiOutlineDelete className="text-yellow-600 w-8 h-8"/>
      </div>
    </section>
  )
}

export default ProductDetail ;
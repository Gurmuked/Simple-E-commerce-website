import Button from './Button';
import Product from '../General/Product';
import { product } from '../constants/Data'

 const Products = () =>(
    <section className='w-[90%] mx-auto' >
      <div className='flex flex-col w-[100%] justify-center items-center text-center mt-16 mb-10'>
        <h1 className='font-poppins font-semibold self-center text-[24px] '>Our Products</h1>
        <Product products={product}/>
        <Button value="Show More" style="bg-white text-yellow-500 font-bold text-[20px] border-2 border-yellow-500 w-60" />
      </div>
    </section>
  )
export default Products;
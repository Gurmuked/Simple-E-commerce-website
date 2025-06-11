import '../../index.css'
import Product from '../General/Product'
import { ShopProducts } from '../constants/Data'


const repeatedProducts = [
  ...ShopProducts,
  ...ShopProducts,
  ...ShopProducts,
  ...ShopProducts,
];

const AllProducts = ({ showCount }) => (
    <section className='w-[90%] mx-auto' >
      <div className='flex flex-col w-[100%] justify-center items-center text-center mt-6 mb-10'>
        <Product products={showCount ? repeatedProducts.slice(0, showCount) : repeatedProducts} />
      </div>
    </section>
  )

export default AllProducts;
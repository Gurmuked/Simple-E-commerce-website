import React from 'react'
import Order from './Order';
import Detail from './Detail';
import Related from './Related';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';

 const Product = () => {
  return (
    <div>
      <Navbar />
      <Order />
      <Detail />
      <Related />
      <Footer />
    </div>
  )
}
export default Product;
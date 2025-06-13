import Navbar from '../Home/Navbar';
import Hero from '../General/Hero';
import Dilevery from '../Shop/Dilevery';
import Footer from '../Home/Footer'
import { Fragment } from 'react';
import ProductDetail from './ProductDetail';
import PriceCalculation from './PriceCalculation';

 const Cart = () => {
  return (
    <section>
      <Navbar />
      <Hero img="../src/assets/logo.png" title="Cart" link1="Home" link2="Cart"/>
      <secio className="flex ">
        <ProductDetail />
        <PriceCalculation />
      </secio>
      <Dilevery />
      <Footer />
    </section>
  )
}

export default Cart;
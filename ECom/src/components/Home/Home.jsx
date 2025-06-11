import React from 'react';
import {Navbar, Hero, Category, Products, Inspiration, Arrangement, Footer} from '../constants/index';
import Product from '../singleProdcut/Product';

const Home = () => {
  return (
  <>
   <Navbar />
   <Hero />
   <Category />
   <Products />
   <Inspiration />
   <Arrangement />
   <Footer />
   <Product />
  </>
  )
}

export default Home;
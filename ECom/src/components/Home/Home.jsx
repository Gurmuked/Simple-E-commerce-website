import React from 'react';
import {Navbar, Hero, Category, Products, Inspiration, Arrangement, Footer} from '../constants/index';
import ComparisonHome from '../ProductComparison/ComparisonHome';

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
   <ComparisonHome />
  </>
  )
}

export default Home;
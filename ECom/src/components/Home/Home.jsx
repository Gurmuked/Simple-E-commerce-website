import React from 'react';
import {Navbar, Hero, Category, Products, Inspiration, Arrangement, Footer} from '../constants/index';
import Hover from '../General/Hover'

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
  </>
  )
}

export default Home;
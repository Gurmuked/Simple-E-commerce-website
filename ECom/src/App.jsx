import React from 'react';
import {Navbar, Hero, Category, Products, Inspiration, Arrangement, Footer} from './constants/index'
import Shop from './components/Shop/Shop.jsx'
import './index.css'

function App() {

  return (
  <>
   <Navbar />
   <Hero />
   <Category />
   <Products />
   <Inspiration />
   <Arrangement />
   <Footer />
   <Shop />
  </>
  )
}

export default App;

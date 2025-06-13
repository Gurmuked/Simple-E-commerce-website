import '../../index.css'
import AllProducts from './AllProducts'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import Dilevery from './Dilevery'
import Filter from './Filter'
import Hero from '../General/Hero'

const Shop = () => (

  <>
    <Navbar />
     <Hero img ="" title="shop" link1="Home" link2 ="Shop"/>
    <Filter />
    <AllProducts />
    <Dilevery />
    <Footer border="1"/>
  </> 

  )

export default Shop;
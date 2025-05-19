import '../../index.css'
import AllProducts from './AllProducts'
import HHero from '../General/HHero'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import Dilevery from './Dilevery'
import Filter from './Filter'

const Shop = () => (

  <>
    <Navbar />
    <HHero bgImage="bg-hero-pattern-shop h-[50vh]"/>
    <Filter />
    <AllProducts />
    <Dilevery />
    <Footer border="1"/>
  </> 

  )

export default Shop;
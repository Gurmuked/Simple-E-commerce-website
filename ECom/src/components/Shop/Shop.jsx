import '../../index.css'
import AllProducts from './AllProducts'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import Dilevery from './Dilevery'
import Filter from './Filter'

const Shop = () => (

  <>
    <Navbar />
    <Filter />
    <AllProducts />
    <Dilevery />
    <Footer border="1"/>
  </> 

  )

export default Shop;
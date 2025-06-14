import Navbar from '../Home/Navbar';
import Hero from '../General/Hero';
import Dilevery from '../Shop/Dilevery';
import Footer from '../Home/Footer';
import ContactFrom from './ContactFrom';


const CheckOut = () => {
  return (
    <section>
      <Navbar />
      <Hero img="../src/assets/logo.png" title="Contact" link1="Home" link2="Contact"/>
      <ContactFrom />
      <Dilevery />
      <Footer />
    </section>
  )
}

export default CheckOut ;
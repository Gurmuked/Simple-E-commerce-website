import Navbar from '../Home/Navbar';
import Hero from '../General/Hero';
import Dilevery from '../Shop/Dilevery';
import Footer from '../Home/Footer';
import Form from './Form';
import CheckInfo from './CheckInfo';

const CheckOut = () => {
  return (
    <section>
      <Navbar />
      <Hero img="../src/assets/logo.png" title="Checkout" link1="Home" link2="Checkout"/>
      <div className='flex justify-between w-[100%] my-10'>
         <Form />
         <CheckInfo />
      </div>
      <Dilevery />
      <Footer />
    </section>
  )
}

export default CheckOut ;
import Navbar from '../Home/Navbar';
import Hero from '../General/Hero';
import Dilevery from '../Shop/Dilevery';
import Footer from '../Home/Footer';
import Blog from './Blog';
import Categories from './Categories';
import RecentPost from './RecentPost';


const About = () => {
  return (
    <section>
      <Navbar />
      <Hero img="../src/assets/logo.png" title="About" link1="Home" link2="About"/>
      <div className='flex justify-center mx-20 mt-12'>
        <Blog />
        <div className='my-10 ml-10 px-8'>
          <Categories />
          <RecentPost />
        </div>
      </div>
      <Dilevery />
      <Footer />
    </section>
  )
}

export default About;
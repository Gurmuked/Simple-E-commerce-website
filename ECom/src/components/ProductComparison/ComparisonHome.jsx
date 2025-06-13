import ComparisonHeader from './ComparisonHeader';
import ComparisonSection from './ComparisonSection';
import { sections } from './ComparisonTable';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import Dilevery from '../Shop/Dilevery';
import Hero from '../General/Hero';

const ComparisonHome = () => {
  return (
    <section>
      <Navbar />
      <Hero img="../src/assets/logo.png" title="Product Comparison" link1="Home" link2="Comparison" />
      <ComparisonHeader />
      {sections.map((section, idx) => (
        <ComparisonSection key={idx} title={section.title} rows={section.rows} />
      ))}
      <Dilevery />
      <Footer />
    </section>
  )
}

export default ComparisonHome;
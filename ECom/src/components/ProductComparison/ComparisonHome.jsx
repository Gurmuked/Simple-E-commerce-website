import React from 'react'
import ComparisonHeader from './ComparisonHeader';
import ComparisonSection from './ComparisonSection';
import { sections } from './ComparisonTable';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';

const ComparisonHome = () => {
  return (
    <section>
      <Navbar />
      <ComparisonHeader />
      {sections.map((section, idx) => (
        <ComparisonSection key={idx} title={section.title} rows={section.rows} />
      ))}
      <Footer />
    </section>
  )
}

export default ComparisonHome;
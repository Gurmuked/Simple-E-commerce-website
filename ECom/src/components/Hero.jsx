import React from 'react';
import Button from './Button';

const Hero = () => (
  <section className="w-full h-[80vh]">
    <div className={`bg-hero-pattern bg-cover bg-center h-[100%]`}>
      <div className='absolute top-1/2 left-1/2 transfrom bg-yellow-700 '>
        <h4>New Arrival</h4>
        <h2>
          Discover Our <br /> New Collection
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ui elit failure. luctus nec
          ullomcorper motttis.
        </p>
        <Button value="Buy Now" style="bg-yellow-600 text-white" />
      </div>
    </div>
  </section>
);

export default Hero;
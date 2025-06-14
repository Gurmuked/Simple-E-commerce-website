import Button from './Button';

const Hero = () =>  (
  <section className="w-full h-[85vh] bg-hero-pattern bg-cover bg-center rounded-lg items-center">
    <div>
      <div className='absolute top-[23%] right-14 bottom-14 transfrom bg-amber-50  w-[600px] px-8 py-8  rounded-lg flex flex-col justify-center'>
        <h4 className='font-poppins font-semibold text-[16px] '>New Arrival</h4>
        <h2 className='font-poppins font-bold text-yellow-700 text-[28px]'>
          Discover Our <br /> New Collection
        </h2>
        <p className='font-poppins font-normal text-[14px] mb-6 mt-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ui elit failure. luctus nec
          ullamcorper mattis.
        </p>
        <Button value="Buy Now" style="bg-yellow-600 text-white w-[200px] mt-10" />
      </div> 
    </div>
  </section>
  )

export default Hero;
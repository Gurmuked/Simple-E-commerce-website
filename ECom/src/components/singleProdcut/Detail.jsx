import React from 'react'
import sofa1 from '../../assets/sofaD1.png';
import sofa2 from '../../assets/sofaD2.png';

const Detail = () => {
  return (
    <section className="py-10 mx-20">
      {/* Tabs */}
      <div className="flex justify-center items-center gap-8 mb-6 mx-20">
        <button className="pb-2 text-gray-400">Description</button>
        <button className="pb-2 text-gray-400">Additional Information</button>
        <button className="pb-2 text-gray-400">Reviews [5]</button>
      </div>
      {/* Description text */}
      <div className="mb-8 mx-20">
        <p className="text-gray-500 mb-4">
          Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          <br/><br/>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
      </div>
      {/* Images */}
      <div className="flex w-[100%] justify-center gap-8">
        <div className="bg-beige rounded-lg flex-1 flex items-center justify-center min-h-[300px] min-w-[470px] max-w-[600px] max-h-[300px]">
          <img src={sofa2} alt="sofa arrangement 1" className="object-contain w-full h-full" />
        </div>
        <div className="bg-beige rounded-lg flex-1 flex items-center justify-center min-h-[300px] min-w-[470px] max-w-[600px] max-h-[300px]">
          <img src={sofa1} alt="sofa arrangement 2" className="object-contain w-full h-full" />
        </div>
      </div>
    </section>
  )
}
export default Detail;
import React from 'react'
import { sofa } from '../constants/Data';
import sofa5 from '../../assets/sofa5.png';
import { Link } from 'react-router-dom';

const colorOptions = [
  { name: 'Purple', className: 'bg-purple-600' },
  { name: 'Black', className: 'bg-black' },
  { name: 'Beige', className: 'bg-beige' },
];

const sizeOptions = ['L', 'XL', 'XS'];

const Order = () => {

  return (

    <section>
      <div className='w-full bg-linkColor h-[60px]'>
        <ul className='flex flex-row justify-start items-center h-[100%] pl-20'>
          <li className='mr-4 '><span className='text-gray-400'>Home</span>  &#x3e;</li>
          <li className='mr-4 text-gray-400'>Shop <span className='text-black'>  &#x3e; </span> |</li>
          <li className='mr-4 '>Asgaard sofa</li>
        </ul>
      </div>
    <div className="flex gap-8 justify-center items-start pt-10 pb-4 mx-20">
      <div className="flex flex-col gap-4">
        {sofa.map((item) =>(
          <div
            key={item.id}
            className={`rounded-lg bg-beige w-20 h-20`}
          >
            <img src={item.img} alt="sofa" className="object-cover w-full h-full" />
          </div>
        ))}
      </div>

      <div className="bg-beige rounded-xl flex items-center justify-center w-[400px] h-[400px]">
        <img src={sofa5} alt="sofa" className="object-contain max-h-[350px] max-w-[350px]" />
      </div>

      <div className="flex-1 max-w-xl">
        <h2 className="text-3xl font-semibold mb-2">Asgaard sofa</h2>
        <p className="text-xl text-gray-500 mb-2">Rs. 250,000.00</p>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-yellow-400 text-lg">★★★★★</span>
          <span className="text-gray-400 text-sm ml-2">5 Customer Review</span>
        </div>
        <p className="text-gray-500 mb-4">
          Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
        </p>

        <div className="mb-4">
          <p className="font-medium mb-1">Size</p>
          <div className="flex gap-2">
            {sizeOptions.map((size) => (
              <span
                key={size}
                className={`px-4 py-1 rounded border`}
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className="font-medium mb-1">Color</p>
          <div className="flex gap-3 items-center">
            {colorOptions.map((color) => (
              <span
                key={color.name}
                className={`w-7 h-7 rounded-full border-2 inline-block ${color.className}`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center border rounded px-2 py-1 gap-2">
            <span className="text-xl px-2">-</span>
            <span className="min-w-[24px] text-center">1</span>
            <span className="text-xl px-2">+</span>
          </div>
          <span className="px-6 py-2 rounded border border-black font-medium bg-white text-black">Add To Cart</span>
          <Link to='/compare'>
          <span className="px-6 py-2 rounded border border-black font-medium bg-white text-black">+ Compare</span>
          </Link>
        </div>

        <hr className="my-6" />

        <div className="grid grid-cols-1 gap-y-2 text-gray-500 text-sm mb-4">
          <div>SKU <span className="text-black ml-2">: ssoo1</span></div>
          <div>Category <span className="text-black ml-2">: Sofas</span></div>
          <div>Tags <span className="text-black ml-2">: Sofa, Chair, Home, Shop</span></div>
          <div className="flex items-center gap-2">Share :
            <span className="ml-2 flex gap-2">
              <span className="hover:text-blue-600">&#xf09a;</span> {/* Facebook */}
              <span className="hover:text-blue-400">&#xf099;</span> {/* Twitter */}
              <span className="hover:text-gray-700">&#xf0e1;</span> {/* LinkedIn */}
            </span>
          </div>
        </div>
      </div>
    </div>

    <hr className='pt-2' />

  </section>
  )
}
export default Order;
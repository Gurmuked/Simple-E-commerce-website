import React, { useState } from 'react';
import Button from './Button';
import { inspiration } from '../constants/Gallery';
import { FaArrowRightLong } from "react-icons/fa6";



const Inspiration = () => {
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const itemsPerPage = 1; // Number of items per page

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the items for the current page
  const currentItems = inspiration.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil(inspiration.length / itemsPerPage);

  // Handle page navigation
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };



  return (
    <section className='w-[100%] mx-auto'>
      <div className='flex flex-row w-[100%] flex-wrap justify-center items-center bg-[251 248 243] py-10 '>
        <div className=' flex flex-col w-[30%] items-center text-center px-4 py-2 '>
          <h3 className='font-poppins font-bold text-[32px] text-start '>
            <span>50+</span> Beautiful rooms inspiration
          </h3>
          <p className='font-poppins font-medium text-[18px] text-start mb-3'>
            Our designer already made a lot of beautiful prototype of rooms that inspire you
          </p>
          <Button value="Explore More" style="bg-yellow-600 text-white" />
        </div>
        <div className='w-[30%] rounded-lg relative mx-6 px-2 py-2'>
          <img src='../src/assets/insp1.png' alt="inner peace" className='w-[100%] h-[400px] rounded-lg' />
          <div className='absolute bottom-6 left-11 bg-white bg-opacity-80 py-2 px-4 pr-4 z-[10]'>
            <p className='font-poppins font-normal text-[14px]'>01 ----- Rest Room</p>
            <h4 className='font-poppins font-bold text-[24px]'>Inner peace</h4>
            <FaArrowRightLong className='bg-yellow-500 text-white text-[32px] absolute left-44 bottom-0 w-10 h-8' />
          </div>
        </div>
        <div className='flex flex-col w-[30%]'>
          {
            currentItems.map(({ img, title, id }) => (
              <div key={id} className={`flex flex-col justify-center items-center text-center w-[100%] px-2 py-2`}>
                <img src={img} alt={title} className={` h-[350px] rounded-md w-[100%]`} />
              </div>
            ))
          }
           
                   {/* Dot Pagination
          <div className='flex justify-center mt-4'>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-4 h-4 mx-1 rounded-full ${currentPage === index + 1 ? 'bg-yellow-500' : 'bg-gray-300'}`}
              />
            ))}
          </div> */}
          <div className='flex justify-center h-8 mt-4 mb-2'>
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-4 py-2 mx-2 bg-gray-300 text-gray-700 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 mx-2 bg-gray-300 text-gray-700 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Next
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};


export default Inspiration;
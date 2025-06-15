import React from 'react';
import { FaUser, FaRegCalendarAlt, FaTag } from 'react-icons/fa';
import {Data} from './Data';


const Blog = () => {
  return (
    <section className="flex flex-col justify-start w-[60%] my-10 mr-10 px-8" >
      {Data.map((item, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden my-4">
          <img src={item.img} alt={item.title} className="w-full h-72 object-cover rounded-lg" />
          
          <div className="px-2 py-4 space-y-2">
            <div className="flex items-center text-gray-500 text-sm space-x-4">
              <div className="flex items-center gap-1">
                <FaUser />
                <span>Admin</span>
              </div>
              <div className="flex items-center gap-1">
                <FaRegCalendarAlt />
                <span>14 Oct 2022</span>
              </div>
              <div className="flex items-center gap-1">
                <FaTag />
                <span>Wood</span>
              </div>
            </div>

            <h4 className="text-[28px] font-semibold text-gray-800 my-4">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.para}</p>
            <button className="text-black border-b-2 border-black text-sm hover:text-green-900 my-6">Read more</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Blog;
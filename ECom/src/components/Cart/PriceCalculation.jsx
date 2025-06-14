import { Link } from "react-router-dom";

const PriceCalculation = () => {
  return (
    <selection className='flex flex-col items-center w-[400px] h-[300px] bg-beige mt-10 mb-10 mx-10 py-8 ml-4' >
      <h4 className="font-poppins font-semibold text-[24px] pb-4 mb-6">Cart Totals</h4>
      <div className="flex justify-left mb-4 ">
        <p className="font-poppins font-semibold text-[16px]">Subtotal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
        <p className="font-poppins text-[14px] text-gray-600">Rs. 250,000.00</p>
      </div>
      <div className="flex justify-left mb-4 ">
        <p className="font-poppins font-semibold text-[16px]">Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
        <p className="font-poppins text-[14px] text-yellow-600">Rs. 250,000.00</p>
      </div>
      <Link to="/checkout">
        <button className="border-2 rounded-lg py-2 px-6 border-gray-400 text-gray-700 mt-4">Check Out</button>
      </Link>
    </selection>
  )
}

export  default  PriceCalculation;
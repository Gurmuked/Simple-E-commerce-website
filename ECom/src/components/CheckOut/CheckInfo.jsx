import React from 'react';

const CheckInfo = () => {
  return (
    <section className="w-[48%] bg-white py-8 mr-20 items-center text-center ">
      {/* Product and Subtotal */}
      <div className="flex justify-between items-start border-b border-gray-200 pb-4 mb-4">
        <div className='text-left'>
          <h2 className="font-bold text-xl mb-2">Product</h2>
          <div className="text-gray-400 text-sm mb-1">Asgaard sofa <span className="text-black">x 1</span></div>
          <div className="text-base mb-1">Subtotal</div>
          <div className="text-base font-semibold">Total</div>
        </div>
        <div className="text-right">
          <h2 className="font-bold text-xl mb-2">Subtotal</h2>
          <div className="text-base text-gray-700 mb-1">Rs. 250,000.00</div>
          <div className="text-base text-gray-700 mb-1">Rs. 250,000.00</div>
          <div className="text-xl font-bold text-yellow-600">Rs. 250,000.00</div>
        </div>
      </div>
      {/* Payment Method */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <span className="inline-block w-3 h-3 rounded-full bg-black mr-2"></span>
          <span className="font-medium">Direct Bank Transfer</span>
        </div>
        <p className="text-gray-400 text-sm mb-4 text-left">
          Make your payment directly into our bank account. Please use your Order ID as the payment reference. 
          Your order will not be shipped until the funds have cleared in our account.
        </p>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <input type="radio" id="bank" name="payment" defaultChecked className="mr-2" />
            <label htmlFor="bank" className="text-gray-400 font-medium">Direct Bank Transfer</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="cod" name="payment" className="mr-2" />
            <label htmlFor="cod" className="text-gray-400 font-medium">Cash On Delivery</label>
          </div>
        </div>
        <p className="text-gray-500 text-sm mb-4 text-left">
          Your personal data will be used to support your experience throughout 
          this website, to manage access to your account, and for other purposes described in our 
          <span className="font-bold">privacy policy</span>.
        </p>
        <button className="w-[50%] py-3 border border-black rounded-lg font-medium text-lg hover:bg-yellow-500 hover:text-white transition">Place order</button>
      </div>
    </section>
  );
};

export default CheckInfo;
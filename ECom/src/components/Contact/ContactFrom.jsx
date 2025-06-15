import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import Button from "../Home/Button"


const Input = ({ label, ...props }) => (
  <div className="mb-5">
    <label className="block text-[18px] font-semibold mb-2">{label}</label>
    <input className={`${props.y} border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base `} {...props}/>
  </div>
);

 const ContactFrom = () => {
  return (
    <section className='flex flex-col mx-20 my-14'>
      <div className="w-[600px] mx-auto flex flex-col justify-center text-center">
        <h2 className="font-poppins font-semibold text-[28px] text-black">Get In Touch With Us</h2>
        <p className="font-poppins font-normal text-[16px] text-gary-600">
          For More Information About Our Product & Services. 
          Please Feel Free To Drop Us An Email. 
          Our Staff Always Be There To Help You Out. 
          Do Not Hesitate!
        </p>
      </div>

      <div className="flex justify-between items-center ">
        <div className="mx-10 my-10">
          <div  className="flex justify-start py-4">
            <FaLocationDot className="w-8 h-8 mx-6"/>
            <div>
              <h4 className="font-poppins font-sm text-[18px] text-black">Address</h4>
              <p className="font-poppins font-normal text-[14px] text-gray-500">236 5th SE Avenue, <br /> New York NY10000, United<br /> States</p>
            </div>
          </div>
          <div className="flex justify-start my-8 py-4">
            <FaPhone className="w-8 h-8 mx-6"/>
            <div>
              <h4 className="font-poppins font-sm text-[18px] text-black">Phone</h4>
              <p className="font-poppins font-normal text-[14px] text-gray-500">
                Mobile: +(84) 546-6789 <br />
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>
          <div className="flex justify-start py-4">
            <IoTime className="w-8 h-8 mx-6"/>
            <div>
              <h4 className="font-poppins font-sm text-[18px] text-black">Working Time</h4>
              <p className="font-poppins font-normal text-[14px] text-gray-500">
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>
        <div className="mr-20 py-6 px-4">
          <Input label="Your Name" type='text' y="w-[400px]"/>
          <Input label="Email" type="email" y="w-[400px]"/>
          <Input label="Subject" type="textarea" y="h-[100px] w-[400px]"/>
          <Button value="Submit" style="w-[250px] border-2 border-gray-300 bg-yellow-500 rounded-lg mx-auto"/>
        </div>
      </div>
    </section>
  )
}

export default ContactFrom;
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { Input } from '../CheckOut/Form';

 const ContactFrom = () => {
  return (
    <selection className=''>
      <div>
        <h2>Get In Touch With Us</h2>
        <p>
          For More Information About Our Product & Services. 
          Please Feel Free To Drop Us An Email. 
          Our Staff Always Be There To Help You Out. 
          Do Not Hesitate!
        </p>
      </div>
      <div>
        <div>
          <div>
            <div>
              <FaLocationDot />
              <h4>Address</h4>
              <p>236 5th SE Avenue, <br /> New York NY10000, United<br /> States</p>
            </div>
          </div>
          <div>
            <div>
              <FaPhone />
              <h4>Phone</h4>
              <p>
                Mobile: +(84) 546-6789 <br />
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>
          <div>
            <div>
              <IoTime />
              <h4>Working Time</h4>
              <p>
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>
        <div>
          <Input label="Your Name" />
          <Input label="Email" />
          <Input label="Subject" />
        </div>
      </div>
    </selection>
  )
}

export default ContactFrom;

import { delivery } from '../constants/Data';

const Dilevery = () => (
    <section className='bg-customLinen py-14'>
      <div className='flex flex-row justify-between items-center mx-10'>
        {
        delivery.map((props) => (
           <div className='flex flex-row justify-between items-center'>
            {props.img}
            <div>
              <h4 className='font-poppins font-semibold text-[16px]'>{props.title}</h4>
              <p className='font-poppins font-normal text-[12px] text-gray-500'>{props.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
export default Dilevery
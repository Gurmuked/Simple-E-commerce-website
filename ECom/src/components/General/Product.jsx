import '../../index.css';
import { Link } from 'react-router-dom';

const Product = ({products = []}) => (
    <section>
      <div className={`flex flex-wrap justify-center items-center w-full mb-10 `}>
          {
           products.map(({img, title, subtitle, price, delPrice, id, index }) => (
            <div
              key={id}
              className={`
                flex flex-col justify-center items-center text-start
                w-full xs:w-[48%] sm:w-[31%] md:w-[22%]
                rounded-lg bg-gray-100 mt-10
                xs:mr-4 sm:mr-4 md:mr-5
                mb-6 mx-0
                ${index % 4 === 3 ? 'mr-0' : ''}
              `}
              style={{ maxWidth: '400px' }}
              >
                <Link to="/compare">
                <img src={img} alt={title} className="w-full h-[250px] rounded-lg"/>
                </Link>
                <div className='flex flex-col justify-left items-left h-[100px] w-full pl-4 mt-3'>
                <h4 className='font-poppins font-semibold text-[20px]' >{title}</h4>
                <p className='font-poppins font-normal text-[16px]' >{subtitle}</p>
                <h4 className="font-poppins font-semibold text-[20px] flex flex-row justify-between leading-4">
                 <span>Rp {price}</span>
                 <del className="text-gray-500 mr-4 "> {delPrice}</del>
                </h4>
                </div>
            </div>
          ))
          }
        </div>
    </section>
  )

export default Product;
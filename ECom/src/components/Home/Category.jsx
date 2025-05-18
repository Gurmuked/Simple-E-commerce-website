
import { category } from '../../constants/Gallery';

const Category = () =>(
    <section className='mx-16 flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center text-center w-[100%] mt-16 mb-4'>
        <h2 className='font-poppins font-bold text-[24px] '>Browse The Range</h2>
        <p className='font-poppins font-normal text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='flex flex-row justify-center items-center text-center w-[90%] mt-10'>
        {
          category.map(({img, title, id, index }) => (
            <div key={id} className={`flex flex-col justify-center items-center text-center w-[33%] ${index !== img.length -1 ? 'mr-5' : 'mr-0'}`}>
              <img src={img} alt={title} className={`w-[100%] h-[400px] rounded-md mb-10  `} />
              <h4 className='font-poppins font-semibold text-[18px] ' >{title}</h4>
            </div>
          ))
        }
      </div>
    </section>
  )
export default Category;
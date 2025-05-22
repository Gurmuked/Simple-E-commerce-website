import { category } from '../constants/Data';

const Category = () =>(
    <section className="mx-2 xs:mx-4 sm:mx-8 md:mx-16 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center text-center w-full mt-16 mb-4">
        <h2 className="font-poppins font-bold text-[24px]">Browse The Range</h2>
        <p className="font-poppins font-normal text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="flex flex-col xs:flex-row flex-wrap justify-center items-center text-center w-full sm:w-[90%] mt-10">
        {
          category.map(({img, title, id, index }) => (
            <div
              key={id}
              className={`
                flex flex-col justify-center items-center text-center
                w-full xs:w-[48%] sm:w-[30%]
                mb-8 xs:mb-0
                xs:mr-4 sm:mr-4
                ${index % 3 === 2 ? 'mr-0' : ''}
              `}
              style={{ maxWidth: '400px' }}
            >
              <img
                src={img}
                alt={title}
                className="
                  w-full
                  h-[220px] xs:h-[260px] sm:h-[320px] md:h-[400px]
                  rounded-md mb-6
                "
              />
              <h4 className="font-poppins font-semibold text-[18px]">{title}</h4>
            </div>
          ))
        }
      </div>
    </section>
)
export default Category;
import './Extra.css'
import image1 from './Image/96634251_abstract watercolour winter landscape background design 1711.jpg'
import image2 from './Image/autism-day-awareness-collage-style-with-people.jpg'
import image3 from './Image/watercolor-painting-with-multi-colored-abstract-backgrounds-generative-ai.jpg'


const ExtraSection2 = () => {
    return (
        <div className="">
            <h1 className="text-4xl font-medium text-center mt-10 mb-10">Our Top Painting</h1>

            <div className='lg:flex gap-16 lg:ml-24  '>
                <div className='mb-5'>
                    <img className= 'cursor-pointer imageBorder lg:w-[400px] lg:h-[350px]' src={image1} alt="" />
                </div>
                <div className='mb-5'>
                    <img className='cursor-pointer imageBorder lg:w-[400px] lg:h-[350px]' src={image2} alt="" />
                </div>
                <div>
                    <img className='cursor-pointer imageBorder  lg:w-[400px] lg:h-[350px]' src={image3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ExtraSection2;
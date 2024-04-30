import image from './Image/slider.webp'
import './Extra.css'

const ExtraSection = () => {
    return (
        <div className=''>
            <img src={image} alt="" />
            <div className='absolute ml-14'>
                <div className='relative lg:bottom-[490px] md:bottom-[265px]'>
                    <p className='lg:text-6xl md:text-2xl font-bold my-4'>Amazing</p>
                    <p className='lg:text-6xl md:text-2xl font-medium lg:mb-16 md:mb-[30px] text-[#cd3520]'>Modern Artworks</p>
                    <button className='button19 lg:w-[160px] md:w-[100px] md:h-[50px] lg:h-[60px]'>Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;
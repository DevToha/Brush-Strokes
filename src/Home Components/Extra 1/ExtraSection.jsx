import image from './Image/slider.webp'
import './Extra.css'

const ExtraSection = () => {
    return (
        <div className=''>
            <img src={image} alt="" />
            <div className='absolute lg:ml-14 md:ml-14 ml-2'>
                <div className='relative lg:bottom-[490px] md:bottom-[265px] bottom-[162px]'>
                    <p className='lg:text-6xl md:text-2xl text-lg font-bold my-4'>Amazing</p>
                    <p className='lg:text-6xl md:text-2xl font-medium mb-6 lg:mb-16 md:mb-[30px] text-[#cd3520]'>Modern Artworks</p>
                    <button className='button19 lg:w-[160px] md:w-[100px] md:h-[50px] lg:h-[60px]'>Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;
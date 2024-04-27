import image from './Image/slider.webp'
import './Extra.css'

const ExtraSection = () => {
    return (
        <div className=''>
            <img src={image} alt="" />
            <div className='absolute ml-14'>
                <div className='relative bottom-[490px]'>
                    <p className='text-6xl font-bold my-4'>Amazing</p>
                    <p className='text-6xl font-medium mb-16 text-[#cd3520]'>Modern Artworks</p>
                    <button className='button19'>Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;
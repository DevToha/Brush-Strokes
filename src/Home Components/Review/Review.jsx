import './Review.css'
import { CiStar } from "react-icons/ci";
import image1 from './Review Image/drawings-about-legal-profession.jpg'
import image2 from './Review Image/europeana-CgbXlAtjIEo-unsplash.jpg'
import image3 from './Review Image/vecteezy_watercolor-owl-with-books-isolated-illustration_24308258.jpg'


const Review = () => {
    return (
        <div>
            <h1 className="text-4xl font-semibold mt-8 text-center mb-8">What Our People Saying</h1>

            <div className='lg:flex md:flex gap-16 lg:ml-[95px] cursor-pointer'>
                <div className="card13 rounded-lg">
                    <div className="card13-img">
                    <div className='bg-[#fae8d3] flex gap-6 w-[] h-[160px] pt-10 pl-10'>
                            <img src={image3} />
                            <div>
                                <p className='font-medium text-base'>Animal Watercolor Portrait</p>
                                <p className='font-medium text-base'>Price : $ 110</p>
                            </div>
                        </div>
                        <div className="card13-details bg-[#fff4e4] mt-7">
                            <h1 className='mb-8'>Aurelia Davenport</h1>
                            <p className='mt-5'>A mesmerizing blend of ethereal hues and surreal shapes, this painting transports you to a realm where reality dances with imagination. Its enigmatic beauty is a testament to the artist's mastery of form and color, leaving viewers spellbound in its captivating embrace.</p>
                        </div>
                        <div className='card13-details'>
                            <p>Professor - Aurelia Davenport</p>
                            <div className='flex gap-1 mt-2'>
                                <CiStar />
                                <CiStar />
                                <CiStar />
                                <CiStar />
                                <CiStar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card13 rounded-lg my-5 lg:my-0 md:my-0">
                    <div className="card13-img">
                        <div className='bg-[#fae8d3] flex gap-6 w-[] h-[160px] pt-10 pl-10'>
                            <img src={image2} />
                            <div>
                                <p className='font-medium text-base'>Realistic Oil Portrait</p>
                                <p className='font-medium text-base'>Price : $ 90.10</p>
                            </div>
                        </div>
                        <div className="card13-details bg-[#fff4e4] mt-7">
                            <h1 className='mb-8'>Luna Evergreen</h1>
                            <p className='mt-5'>Dive into a world of boundless creativity with this stunning masterpiece! Each brushstroke tells a story, weaving together elements of mystique and wonder. It's as if the canvas itself breathes life into the room, inviting you to explore its depths and unravel its secrets.</p>
                        </div>
                        <div className='card13-details'>
                            <p>Actress - Luna Evergreen</p>
                            <div className='flex gap-1 mt-2'>
                                <CiStar />
                                <CiStar />
                                <CiStar />
                                <CiStar />
                                <CiStar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card13 rounded-lg">
                    <div className="card13-img">
                        <div className='bg-[#fae8d3] flex gap-6 w-[] h-[160px] pt-10 pl-10'>
                            <img src={image1} />
                            <div>
                                <p className='font-medium text-base'>Pencil Sketch Portrait</p>
                                <p className='font-medium text-base'>Price : $ 100</p>
                            </div>
                        </div>
                        <div className="card13-details bg-[#fff4e4] mt-7">
                            <h1 className='mb-8'>Xavier Nightshade</h1>
                            <p className='mt-5'>Prepare to be whisked away on a visual journey unlike any other! This painting is a symphony of emotions, where every stroke resonates with passion and depth. With its dynamic composition and vibrant energy, it's sure to ignite conversation and inspire awe in all who behold its magnificence.</p>
                        </div>
                        <div className='card13-details'>
                            <p>Scientist - Xavier Nightshade</p>
                            <div className='flex gap-1 mt-2'>
                                <CiStar />
                                <CiStar />
                                <CiStar />
                                <CiStar />
                                <CiStar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
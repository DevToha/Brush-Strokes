import './Review.css'
import { CiStar } from "react-icons/ci";


const Review = () => {
    return (
        <div>
            <h1 className="text-4xl font-semibold mt-8 text-center mb-8">What Our People Saying</h1>

            <div className='flex gap-16 ml-[50px] cursor-pointer'>
                <div className="card13 rounded-lg">
                    <div className="card13-img">
                        <div className='bg-[#fae8d3] w-[] h-[160px] pt-10 pl-10'>
                            <img src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=600" alt="nature-pic-CSSnippets" />
                        </div>
                        <div className="card13-details bg-[#fff4e4] mt-7">
                            <h1 className='mb-8'>Toha khan</h1>
                            <p className='mt-5'>Lorem ipsum dolor, sit amet expedita exerc. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae rerum iure corrupti natus provident! Dolorum provident reprehenderit voluptate quae autem fugit architecto quaerat labore error, ipsam, quibusdam at fuga. Quo!</p>
                        </div>
                        <div className='card13-details'>
                            <p>Professor - Toha khan</p>
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
                        <div className='bg-[#fae8d3] w-[] h-[160px] pt-10 pl-10'>
                            <img src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=600" alt="nature-pic-CSSnippets" />
                        </div>
                        <div className="card13-details bg-[#fff4e4] mt-7">
                            <h1 className='mb-8'>Toha khan</h1>
                            <p className='mt-5'>Lorem ipsum dolor, sit amet expedita exerc. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae rerum iure corrupti natus provident! Dolorum provident reprehenderit voluptate quae autem fugit architecto quaerat labore error, ipsam, quibusdam at fuga. Quo!</p>
                        </div>
                        <div className='card13-details'>
                            <p>Professor - Toha khan</p>
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
                        <div className='bg-[#fae8d3] w-[] h-[160px] pt-10 pl-10'>
                            <img src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=600" alt="nature-pic-CSSnippets" />
                        </div>
                        <div className="card13-details bg-[#fff4e4] mt-7">
                            <h1 className='mb-8'>Toha khan</h1>
                            <p className='mt-5'>Lorem ipsum dolor, sit amet expedita exerc. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae rerum iure corrupti natus provident! Dolorum provident reprehenderit voluptate quae autem fugit architecto quaerat labore error, ipsam, quibusdam at fuga. Quo!</p>
                        </div>
                        <div className='card13-details'>
                            <p>Professor - Toha khan</p>
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
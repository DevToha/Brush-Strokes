import { useLoaderData } from "react-router-dom";
import './CraftDetails.css'

const CraftDetails = () => {

    const items = useLoaderData();
    const { itemName, subcategoryName, shortDescription, processingTime, price, rating, photoURL, customization, userEmail, stockStatus, userName } = items;


    return (
        <div>
            <div className='px-[80px] mt-10'>
                <div className="lg:flex border design border-gray-300 rounded-lg gap-20">
                    <div className='relative'>
                        <div className="imageBorder bg-white p-10">
                            <img className=" h-[450px]  w-[520px] mr-2" src={photoURL} alt="" />
                        </div>
                        <p className="absolute bottom-[527px] text-xl font-bold left-[264px] text8"><span>{stockStatus}</span></p>
                    </div>
                    <div>
                        <div className="ml-4 lg:mb-0 pt-7">
                            <div className="items-center gap-60 my-2">
                                <h2 className="card-title font-extrabold text-[20px] mb-2">{itemName}</h2>
                                <p className="my-3 text-base font-medium">Price : {price}</p>
                                <p className="text-base font-medium">Availability <span className="ml-5">Low stock: <span className="text8 text-lg font-medium">10 left</span></span></p>
                            </div>

                            <div className='mb-4'>
                                <div className='items-center lg:mb-0 mb-3 gap-2'>
                                    <div className="flex items-center gap-60 my-3">
                                        <p className="my-3 text-base font-medium">SubcategoryName : {subcategoryName}</p>

                                    </div>

                                    <p className="my-4 text-base font-medium"> Short Description : {shortDescription}</p>
                                    <div className="items-center gap-40">
                                        <p className="my-3 text-base font-medium">Processing Time : {processingTime}</p>
                                        <p className="my-4 text-base font-medium">Rating : {rating}</p>
                                    </div>
                                    <div className="flex items-center gap-60">
                                        <p className="text-base font-medium">Customization : {customization}</p>
                                    </div>
                                    <div className=" items-center gap-20">
                                        <p className="my-5 text-base font-medium">User Email : {userEmail}</p>
                                        <p className="mb-5 text-base font-medium">User Name : {userName}</p>
                                    </div>

                                </div>

                                <div className="flex gap-5 mt-14">
                                    <div>
                                        <button className="button4 w-[270px] font-semibold h-[50px] rounded-lg">ADD TO CART</button>

                                    </div>
                                    <div>
                                        <button className="button4 w-[270px] font-semibold h-[50px] rounded-lg">BUY NOW</button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftDetails;
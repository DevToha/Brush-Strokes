import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import './MyCart.css'

const MyArtCraft = () => {

    const { user } = useContext(AuthContext)

    const [item, setItem] = useState()

    useEffect(() => {
        fetch(`http://localhost:5000/myProduct/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
            })
    }, [user])
    return (
        <div>
            <h2 className="text-center font-bold text-4xl lg:mb-10 mb-5 mt-10">My Art And Craft Item</h2>
            {/* _id,itemName, price, photoURL */}

            {
                item?.map(p => (
                    <div key={p._id}>
                        {/* <h1>{p.itemName}</h1> */}
                        <div className='px-[80px] mt-10'>
                            <div className="lg:flex border design border-gray-300 rounded-lg gap-20">
                                <div className=''>
                                    <div className="imageBorder bg-white p-10">
                                        <img className=" h-[245px]  w-[390px] mr-2" src={p.photoURL} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="ml-4 lg:mb-0 pt-7">
                                        <div className="items-center gap-60 my-2">
                                            <h2 className="card-title font-extrabold text-[20px] mb-2">{p.itemName}</h2>
                                            <p className="my-3 text-base font-medium">Price : {p.price}</p>
                                        </div>

                                        <div className='mb-4'>
                                            <div className='items-center lg:mb-0 mb-3 gap-2'>
                                                <div className="items-center gap-40">
                                                    <p className="my-4 text-base font-medium">Rating : {p.rating}</p>
                                                </div>
                                                <div className="flex items-center gap-60">
                                                    <p className="text-base font-medium">Customization : {p.customization}</p>
                                                </div>

                                                <p className="text-base mt-5 font-medium"><span>Stock Status : <span className="text-base font-medium text8">{p.stockStatus}</span></span></p>
                                            </div>

                                            <div className="flex gap-5 mt-14">
                                                <div>
                                                    <button className="button4 w-[270px] font-semibold h-[50px] rounded-lg">Update</button>

                                                </div>
                                                <div>
                                                    <button className="button4 w-[270px] font-semibold h-[50px] rounded-lg">Delete</button>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }


            {/* <div className="">
                {
                    items.map(item => <MySingleArtAndCraft key={item.id} item={item}></MySingleArtAndCraft>)
                }
            </div> */}
        </div>
    );
};

export default MyArtCraft;
import './MyCart.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


const MySingleArtAndCraft = ({ p, setItem, item }) => {

    const { _id, itemName, photoURL, price, rating, customization, stockStatus } = p;


    const handleDelete = _id => {
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });

                fetch(`http://localhost:5000/item/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });

                            ///remaining item

                            const remaining = item.filter(i => i._id !== _id);
                            setItem(remaining);
                        }
                    })

            }
        });
    }

    return (
        <div>
            <div className='px-[80px] mt-10'>
                <div className="lg:flex border design border-gray-300 rounded-lg gap-20">
                    <div className=''>
                        <div className="imageBorder bg-white p-10">
                            <img className=" h-[245px]  w-[390px] mr-2" src={photoURL} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="ml-4 lg:mb-0 pt-7">
                            <div className="items-center gap-60 my-2">
                                <h2 className="card-title font-extrabold text-[20px] mb-2">{itemName}</h2>
                                <p className="my-3 text-base font-medium">Price : {price}</p>
                            </div>

                            <div className='mb-4'>
                                <div className='items-center lg:mb-0 mb-3 gap-2'>
                                    <div className="items-center gap-40">
                                        <p className="my-4 text-base font-medium">Rating : {rating}</p>
                                    </div>
                                    <div className="flex items-center gap-60">
                                        <p className="text-base font-medium">Customization : {customization}</p>
                                    </div>

                                    <p className="text-base mt-5 font-medium"><span>Stock Status : <span className="text-base font-medium text8">{stockStatus}</span></span></p>
                                </div>

                                <div className="flex gap-5 mt-14">
                                    <div>
                                        <Link to={`/Update/${_id}`}>
                                            <button className="button4 w-[270px] font-semibold h-[50px] rounded-lg">Update</button>
                                        </Link>

                                    </div>
                                    <div>
                                        <button onClick={() => handleDelete(_id)} className="button4 w-[270px] font-semibold h-[50px] rounded-lg">Delete</button>
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

export default MySingleArtAndCraft;

MySingleArtAndCraft.propTypes = {
    p: PropTypes.object
}
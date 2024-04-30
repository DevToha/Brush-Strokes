import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const Update = () => {

    const { user } = useContext(AuthContext)

    const item = useLoaderData()

    const { _id, itemName, subcategoryName, shortDescription, processingTime, userName, price, rating, photoURL, customization, userEmail, stockStatus } = item;

    const handleUpdateItem = event => {
        event.preventDefault()

        const form = event.target

        const itemName = form.item_name.value
        const subcategoryName = form.subcategory_Name.value
        const shortDescription = form.short_description.value
        const processingTime = form.processing_time.value
        const userName = form.User_Name.value
        const price = form.price.value
        const rating = form.rating.value
        const photoURL = form.photoURL.value
        const customization = form.customization.value
        const userEmail = form.User_Email.value
        const stockStatus = form.stockStatus.value
        const email = user.email

        const UpdatedItem = { itemName, subcategoryName, shortDescription, processingTime, userName, price, rating, photoURL, customization, userEmail, stockStatus, email }

        console.log(UpdatedItem)

        // send data to the server
        fetch(`http://localhost:5000/item/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Item Updated Successfully",
                        // text: "Please, Go To Login Page and Login Now",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div>
            <div className="bg-[#fae8d3] shadow8 py-5 pl-[92px] md:ml-0 lg:ml-[160px] mt-10 rounded-3xl lg:w-[1215px]">

                <h3 className="text-3xl font-semibold lg:ml-[235px] md:ml-[50px]">Update Item : {itemName}</h3>


                <div className=" md:w-1/3 mt-10 mb-10">

                    <form onSubmit={handleUpdateItem}>
                        <div>
                            <div className="lg:flex md:flex gap-16">
                                <div>
                                    <input className="mb-10 lg:w-[470px] md:w-[260px] py-2 px-4 border-2 border-gray-300 rounded-md" type="name" defaultValue={itemName} placeholder="Item Name" name="item_name" id="" required />

                                    <br />

                                    <input className="mb-10 md:w-[260px] lg:w-[470px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" defaultValue={subcategoryName} placeholder="Subcategory Name" name="subcategory_Name" id="" required />

                                    <br />

                                    <input className="mb-10 md:w-[260px] lg:w-[470px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" defaultValue={shortDescription} placeholder="Short Description" name="short_description" id="" required />

                                    <br />

                                    <input className="mb-10 md:w-[260px] lg:w-[470px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" defaultValue={processingTime} placeholder="Processing Time" name="processing_time" id="" required />

                                    <br />

                                    <input className="mb-10 md:w-[260px] lg:w-[470px] py-2 px-4 border-2 border-gray-300 rounded-md" type="name" defaultValue={userName} placeholder="User Name" name="User_Name" id="" required />

                                    <br />


                                </div>

                                {/*  */}

                                <div>
                                    <input className="mb-10 md:w-[260px] lg:w-[470px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" defaultValue={price} placeholder="Price" name="price" id="" required />

                                    <br />

                                    <input className="mb-10 md:w-[260px] lg:w-[470px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" defaultValue={rating} placeholder="Rating" name="rating" id="" required />

                                    <br />

                                    <input className="mb-10 md:w-[260px] lg:w-[470px] py-2 px-4 border-2 border-gray-300 rounded-md" type="photoURL" defaultValue={photoURL} placeholder="Image ( Use Image URL)" name="photoURL" id="" required />

                                    <br />

                                    <input className="mb-10 md:w-[260px] lg:w-[470px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" defaultValue={customization} placeholder="Customization" name="customization" id="" required />

                                    <br />

                                    <input className="mb-10 md:w-[260px] lg:w-[470px] py-2 px-4 border-2 border-gray-300 rounded-md" type="email" defaultValue={userEmail} placeholder="User Email" name="User_Email" id="" required />
                                </div>
                            </div>

                            <div>
                                <div className="relative">
                                    <input className=" lg:w-[1001px] md:w-[580px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" defaultValue={stockStatus} placeholder="Stock Status" name="stockStatus" id="" required />
                                </div>

                                <br />
                                <input className="cursor-pointer ml-8 lg:ml-0 md:ml-0 mt-10 lg:w-[1001px] md:w-[580px] py-2 px-4 border-2 rounded-md border-gray-300 bg-blue-500 text-white text-lg font-medium" type="submit" value="UPDATE NOW" />
                            </div>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Update;
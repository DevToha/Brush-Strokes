import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../Providers/AuthProvider';


const AddCraft = () => {
    const { user } = useContext(AuthContext)


    const handleAddItem = event => {
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

        const newItem = { itemName, subcategoryName, shortDescription, processingTime, userName, price, rating, photoURL, customization, userEmail, stockStatus, email }

        console.log(newItem)

        // send data to the server
        fetch('http://localhost:5000/item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Item Added Successfully",
                        // text: "Please, Go To Login Page and Login Now",
                        icon: "success"
                    });
                }
            })
    }


    return (
        <div>
            <div className="bg-[#fae8d3] shadow8 py-5 pl-[92px] ml-[160px] mt-10 rounded-3xl w-[1215px]">

                <h3 className="text-3xl font-semibold ml-[355px]">Lets Add Some Product!</h3>


                <div className=" md:w-1/3 mt-10 mb-10">

                    <form onSubmit={handleAddItem}>
                        <div>
                            <div className="flex gap-16">
                                <div>
                                    <input className="mb-10 w-[470px] py-2 px-4 border-2 border-gray-300 rounded-md" type="name" placeholder="Item Name" name="item_name" id="" required />

                                    <br />

                                    <input className="mb-10 w-[470px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" placeholder="Subcategory Name" name="subcategory_Name" id="" required />

                                    <br />

                                    <input className="mb-10 w-[470px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" placeholder="Short Description" name="short_description" id="" required />

                                    <br />

                                    <input className="mb-10 w-[470px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" placeholder="Processing Time" name="processing_time" id="" required />

                                    <br />

                                    <input className="mb-10 w-[470px] py-2 px-4 border-2 border-gray-300 rounded-md" type="name" placeholder="User Name" name="User_Name" id="" required />

                                    <br />


                                </div>

                                {/*  */}

                                <div>
                                    <input className="mb-10 w-[470px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" placeholder="Price" name="price" id="" required />

                                    <br />

                                    <input className="mb-10 w-[470px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" placeholder="Rating" name="rating" id="" required />

                                    <br />

                                    <input className="mb-10 w-[470px] py-2 px-4 border-2 border-gray-300 rounded-md" type="photoURL" placeholder="Image ( Use Image URL)" name="photoURL" id="" required />

                                    <br />

                                    <input className="mb-10 w-[470px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" placeholder="Customization" name="customization" id="" required />

                                    <br />

                                    <input className="mb-10 w-[470px] py-2 px-4 border-2 border-gray-300 rounded-md" type="email" placeholder="User Email" name="User_Email" id="" required />
                                </div>
                            </div>

                            <div>
                                <div className="relative">
                                    <input className=" w-[1001px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" placeholder="Stock Status" name="stockStatus" id="" required />
                                </div>

                                <br />
                                <input className="cursor-pointer mt-10 w-[1001px] py-2 px-4 border-2 rounded-md border-gray-300 bg-blue-500 text-white text-lg font-medium" type="submit" value="ADD NOW" />
                            </div>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddCraft;
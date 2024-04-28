import { useEffect, useState } from "react";
// import CraftDetail from "./CraftDetail";
import { useParams } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";


const CraftDetails = () => {

    const [itemDetails, setItemDetails] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/item/${_id}')
            .then(res => res.json())
            .then(data => setItemDetails(data))
    }, [])

    // const estates = useLoaderData();
    const { _id } = useParams();
    const idInt = parseInt(_id);
    const itemDetail = itemDetails.find(itemDetail => itemDetail._id === idInt);

    // const { itemName } = itemDetail

    return (
        <div>
            {/* {
                itemDetails.map(itemDetail => <CraftDetail key={itemDetail._id} itemDetail={itemDetail}></CraftDetail>)
            }

            <CraftDetail></CraftDetail> */}

            name : {itemDetail}
        </div>
    );
};

export default CraftDetails;
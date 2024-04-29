import { useEffect, useState } from "react";
import CraftItem from "./Craft-Item";




const CraftItems = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])


    return (
        <div>
            <h2 className="text-center font-bold text-4xl lg:mb-10 mb-5">Featured Estate</h2>

            <div className="lg:grid lg:grid-cols-3 lg:ml-[75px]">
                {
                    items.map(item => <CraftItem key={item.id} item={item}></CraftItem>)
                }
            </div>

        </div>
    );
};

export default CraftItems
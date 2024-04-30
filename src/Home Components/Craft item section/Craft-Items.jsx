import { useContext, useEffect, useState } from "react";
import CraftItem from "./Craft-Item";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation } from "react-router-dom";
import './craft.css'



const CraftItems = () => {

    const [items, setItems] = useState([])

    const { loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)


    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    if (loading) {
        return <div className="text-center mt-10 items-center justify-center">
            <div className="loader16">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    }

    return (
        <div>
            <h2 className="text-center font-bold text-4xl lg:mb-10 mt-8 mb-8">Featured Estate</h2>

            <div className="lg:grid lg:grid-cols-3 lg:ml-[75px] md:ml-[160px]">
                {
                    items.map(item => <CraftItem key={item.id} item={item}></CraftItem>)
                }
            </div>

        </div>
    );
};

export default CraftItems
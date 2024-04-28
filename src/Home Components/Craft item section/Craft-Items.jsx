
import { useLoaderData } from "react-router-dom";



const CraftItems = () => {

    const items = useLoaderData()
    
    return (
        <div className="mt-10">
            <h2 className="text-center font-bold text-4xl lg:mb-10 mb-5">Featured Estate: {items}</h2>
        </div>
    );
};

export default CraftItems
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import MySingleArtAndCraft from "./MySingleArtAndCraft";

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
            {
                item?.map(p => (<MySingleArtAndCraft key={p._id} p={p}></MySingleArtAndCraft>))
            }
        </div>
    );
};

export default MyArtCraft;
import { Link, NavLink } from "react-router-dom";
import './Header.css'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li><NavLink to="/"><span className="text-lg font-semibold">Home</span></NavLink></li>
        <li><NavLink to="/card"><span className="text-lg font-semibold">All Art & craft Items</span></NavLink></li>
        <li><NavLink to="/AddCraft"><span className="text-lg font-semibold">Add Craft Item</span></NavLink></li>
        <li><NavLink to="/MyArtCraft"><span className="text-lg font-semibold">My Art&Craft List</span></NavLink></li>
        {/* <li><NavLink to="/TopRatedBook">Catalog</NavLink></li> */}

    </>

    return (
        <div className="">
            <div className="lg:navbar bg-[#fae8d3]">
                <div className="navbar-start">
                    <div className="dropdown top-24">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
                            {links}
                        </ul>
                    </div>

                    <div className="ml-10 absolute">
                        {/* <p className="text-3xl lg:inline md:inline hidden"></p> */}
                        <div className="text12 lg:ml-0 ml-28 relative lg:bottom-0 bottom-12">Brush Strokes</div>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <span className="bg-gray-400 lg:inline md:inline hidden cursor-pointer w-[45px] mr-5 rounded-full h-[45px]"><img className="rounded-full" src={user.photoURL} alt="" title={user.displayName} /></span>
                    }

                    {
                        user ?
                            <button onClick={handleSignOut} className="button40">LOG OUT</button>
                            :
                            <div className="flex gap-4 ml-[250px] mt-10 lg:mt-0">
                                <Link to="/login">
                                    <button className="button40">LOGIN</button>
                                </Link>
                                <Link to="/register">
                                    <button className="button40">REGISTER</button>
                                </Link>
                            </div>
                    }


                </div>
            </div>

        </div>
    );
};

export default Header;
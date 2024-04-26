import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    // const { user, logOut } = useContext(AuthContext)

    // const handleSignOut = () => {
    //     logOut()
    //         .then()
    //         .catch()
    // }

    const links = <>
        <li><NavLink to="/"><span className="text-lg font-semibold">Home</span></NavLink></li>
        <li><NavLink to="/card"><span className="text-lg font-semibold">Cart</span></NavLink></li>
        <li><NavLink to="/updateProfile"><span className="text-lg font-semibold">Update Profile</span></NavLink></li>
        <li><NavLink to="/userProfile"><span className="text-lg font-semibold">User profile</span></NavLink></li>
        {/* <li><NavLink to="/TopRatedBook">Catalog</NavLink></li> */}

    </>

    return (
        <div className="px-7 md:px-4">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
                            {links}
                        </ul>
                    </div>

                    <div className="flex justify-center items-center text-center gap-2">
                        {/* <p className="text-3xl lg:inline md:inline hidden"></p> */}
                        <div className="text12">Finder Land</div>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* {
                        user && <span className="bg-gray-400 lg:inline md:inline hidden cursor-pointer w-[45px] mr-5 rounded-full h-[45px]"><img className="rounded-full" src={user.photoURL} alt="" title={user.displayName} /></span>
                    }

                    {
                        user ?
                            <button onClick={handleSignOut} className="button21">LOG OUT</button>
                            :
                            <Link to="/logIn">
                                <button className="button21">LOGIN</button>
                            </Link>
                    } */}

                    <Link to="/logIn">
                        <button className="button21">LOGIN</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Header;
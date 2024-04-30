import { Link, NavLink } from "react-router-dom";
import './Header.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {

    const [theme, setTheme] = useState('light')

    const { user, logOut } = useContext(AuthContext)

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleToggle = e => {
        console.log(e.target.value)
        if (e.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }

    console.log(theme)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li><NavLink to="/"><span className="text-lg font-semibold">Home</span></NavLink></li>
        <li><NavLink to="/allArtAndCraft"><span className="text-lg font-semibold">All Art & craft Items</span></NavLink></li>
        <li><NavLink to="/AddCraft"><span className="text-lg font-semibold">Add Craft Item</span></NavLink></li>
        <li><NavLink to="/MyArtCraft"><span className="text-lg font-semibold">My Art&Craft List</span></NavLink></li>
        {/* <li><NavLink to="/TopRatedBook">Catalog</NavLink></li> */}

    </>

    return (
        <div className="">
            <div className="lg:navbar md:navbar bg-[#fae8d3]">
                <div className="navbar-start">
                    <div className="dropdown md:top-[2px] ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:w-[40px] md:h-[40px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
                            {links}
                        </ul>
                    </div>

                    <div className="lg:ml-10 md:ml-10 sm:ml-0 absolute">
                        {/* <p className="text-3xl lg:inline md:inline hidden"></p> */}
                        <div className="text12 lg:ml-0 ml-28 relative lg:bottom-0 bottom-12 md:bottom-0">Brush Strokes</div>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                    <div className="">
                        {
                            user && <span className=" absolute lg:inline md:inline hidden cursor-pointer w-[45px] mr-5 rounded-full h-[45px]"><img className="rounded-full relative right-16  w-[45px] h-[45px]" src={user.photoURL} alt="" title={user.displayName} /></span>
                        }

                        {
                            user ?
                                <button onClick={handleSignOut} className="button40">LOG OUT</button>
                                :
                                <div className="flex gap-4 ml-[100px] md:mt-0 sm:mt-10 lg:mt-0">
                                    <Link to="/login">
                                        <button className="button40 lg:mb-0 md:mb-0 mb-5">LOGIN</button>
                                    </Link>
                                    <Link to="/register">
                                        <button className="button40">REGISTER</button>
                                    </Link>
                                </div>
                        }
                    </div>

                    <div className="">
                        <label className="swap swap-rotate ml-3">

                            {/* this hidden checkbox controls the state */}
                            <input onChange={handleToggle} type="checkbox" className="theme-controller" />

                            {/* sun icon */}
                            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;
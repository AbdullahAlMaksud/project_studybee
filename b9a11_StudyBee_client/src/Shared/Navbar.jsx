import { Link, NavLink, useNavigate } from "react-router-dom";
import DarkMode from "../utilities/DarkMode";
import { MdHome, MdMiscellaneousServices } from "react-icons/md";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

import 'react-tooltip/dist/react-tooltip.css'


const Navbar = () => {
    const dropdownRef = useRef(null);
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    console.log('from nav', user)
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close dropdown menu if clicked outside of it
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogOut = () => {
        logOut();
        navigate('/')
    }

    const handleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const mainMenu = <>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'border-b-2 border-blue-800 font-medium' : 'hover:text-blue-600 hover:border-b hover:border-blue-800'} to={'/'}>Home</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'border-b-2 border-blue-800 font-medium' : 'hover:text-blue-600 hover:border-b hover:border-blue-800 '} to={'/services'}>All Services</NavLink>
        </li>
        <li>
            <NavLink to={'/about'}>About</NavLink>
        </li>
        <li>
            <NavLink to={'/faq'}>FAQ</NavLink>
        </li>
    </>

    const mobileMainMenu = <>
        <div className="flex flex-col items-end justify-center py-2 text-xl">
            <Link to={'/profile'}><img src={user?.photoURL} className=" h-12 rounded-full border-blue-950 border-2 hover:cursor-pointer" alt="" /></Link>
            <p className="font-hind font-semibold">{user?.displayName}</p>
        </div>
        <hr />
        <div className="flex flex-col my-3 gap-3">
            <NavLink className={({ isActive }) => isActive ? 'bg-blue-950 text-white py-1 rounded-sm pl-2' : 'hover:bg-gray-800 hover:text-white py-1 rounded-sm pl-2'} to={'/addServices'} >Add Service</NavLink>
            <NavLink to={`/services/managed-services`} className={({ isActive }) => isActive ? 'bg-blue-950 text-white py-1 rounded-sm pl-2' : 'hover:bg-gray-800 hover:text-white py-1 rounded-sm pl-2'}>Manage Service</NavLink>
            <NavLink to={'services/my-booked-services'} className={({ isActive }) => isActive ? 'bg-blue-950 text-white py-1 rounded-sm pl-2' : 'hover:bg-gray-800 hover:text-white py-1 rounded-sm pl-2'}>Booked-Services</NavLink>
            <NavLink to={'/services/service-to-do'} className={({ isActive }) => isActive ? 'bg-blue-950 text-white py-1 rounded-sm pl-2' : 'hover:bg-gray-800 hover:text-white py-1 rounded-sm pl-2'}>Service-To-Do</NavLink>
        </div>
        <hr className="" />
        <div className="flex items-center justify-center gap-1 my-3">
            <NavLink to={'/'} className={({ isActive }) => isActive ? "font-medium border-b-2 border-transparent border-b-blue-900 hover:font-semibold p-1.5 rounded-sm dark:bg-gray-800 tooltip" : "font-medium border-b-2 border-transparent hover:border-b-blue-900 hover:font-semibold p-1.5 rounded-sm dark:bg-gray-800 tooltip"}
                data-tip="Home"><MdHome className="text-xl" /></NavLink>
            <NavLink to={'/services'} className={({ isActive }) => isActive ? "font-medium border-b-2 border-transparent border-b-blue-900 hover:font-semibold p-1.5 rounded-sm dark:bg-gray-800 tooltip" : "font-medium border-b-2 border-transparent hover:border-b-blue-900 hover:font-semibold p-1.5 rounded-sm dark:bg-gray-800 tooltip"} data-tip="All Services"><MdMiscellaneousServices className="text-xl" /></NavLink>
            <NavLink className="font-medium border-b-2 border-transparent tooltip tooltip-top hover:border-b-blue-900 hover:font-semibold rounded-sm" data-tip="Dark Mode"><DarkMode /></NavLink>
        </div>
        <div>
            <button onClick={handleLogOut} className="bg-blue-700 text-white w-full py-2 rounded-sm">Log out</button>
        </div>
    </>

    return (
        <div className="fixed font-poppins h-16 lg:min-h-20 w-full bg-transparent backdrop-blur-xl dark:text-white dark:backdrop-blur-xl rounded-b-sm shadow shadow-black/10 z-50">
            <div className="w-11/12  container mx-auto">
                <div className="flex">

                    <div className="flex justify-start items-center h-16 lg:min-h-20">
                        <Link className="text-2xl lg:text-3xl font-medium">Study<span className="text-white dark:text-slate-800">Bee</span></Link>
                    </div>
                    <div className="hidden lg:flex flex-1 items-center justify-center  min-h-20 pr-6">
                        <ul className="flex gap-5">
                            {mainMenu}
                        </ul>
                    </div>



                    <div className="flex flex-1 lg:flex-none items-center justify-end gap-2">
                        <div className="hidden md:flex"><DarkMode /></div>
                        {/* Login & User */}

                        {!user &&
                            <Link to={'/login'}>
                                <button className="rounded-sm px-5 py-2 bg-blue-800 text-white">Log In</button>
                            </Link>

                        }

                        {/* DropDown Menu Button */}
                        {
                            user && <div className="relative" ref={dropdownRef}>
                                {
                                    !isOpen ? <div className="flex rounded-sm border gap-1 md:py-0.5 md:px-0.5 bg-blue-900/30 shadow-sm shadow-black/40">
                                        <button onClick={handleDropdown} className="font-semibold text-white bg-blue-950 px-3 md:px-4 rounded-sm ">Dashboard</button>
                                        <NavLink className={({ isActive }) => isActive ? `shadow-lg shadow-black rounded-sm border-white` : undefined} to={'/profile'}><img src={user?.photoURL} className="rounded-sm h-8 border-2 border-blue-900" /></NavLink>
                                    </div>

                                        : <div className="flex rounded-sm border border-white/40 gap-1 md:py-0.5 md:px-0.5 bg-blue-950/60 shadow-md shadow-black/40">
                                            <button onClick={handleDropdown} className="font-semibold text-white bg-blue-950 px-3 md:px-4 rounded-sm">Dashboard</button>
                                            <img src={user?.photoURL} className="rounded-sm h-8 border-2 border-blue-900" />
                                        </div>
                                }
                                {/* Dropdown Menu */}
                                {isOpen && (
                                    <div className="absolute top-11  -right-3 md:-right-8 bg-white/95 dark:bg-slate-900 backdrop-blur-md rounded shadow-lg mt-2 py-5 px-5 w-60">
                                        {/* Dropdown Items */}
                                        {mobileMainMenu}
                                    </div>
                                )}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
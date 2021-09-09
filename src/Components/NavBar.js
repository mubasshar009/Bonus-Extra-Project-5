import logo from '../assets/Logo.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const NavBar = () => {
    const [state, setState] = useState({
        close: false
    });
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setState({
            close: !state.close
        });


    }

    return (
        <nav className=" bg-blue-50 rounded">
            <div className="px-8 mx-auto">
                <div className="flex justify-between py-2">
                    {/* Logo */}
                    <div className="flex space-x-2 space-x-8">
                        <div className="flex items-center cursor-pointer">
                            <NavLink to="/">
                                <img src={logo} className="h-16 w-16 " alt="" />
                            </NavLink>

                            {/* <span className="text-2xl font-bold">
                                <NavLink to="/">
                                    B Health
                                </NavLink>

                            </span> */}
                        </div>

                        {/* Primary Nav */}
                        <div className="hidden md:flex items-center text-blue-900 font-semibold">
                            <ul className="flex space-x-2 ">
                                <li className="cursor-pointer hover:shadow-md   hover:text-white hover:bg-blue-500 p-2 rounded-full transition duration-300">
                                    <NavLink to="/products">
                                        Products
                                    </NavLink>

                                </li>
                                <li className="cursor-pointer hover:shadow-md  hover:text-white hover:bg-blue-500 p-2 rounded-full transition duration-300">
                                    <NavLink to="/precautions">
                                        Brands
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="flex border border-blue-800  w-60 h-10 space-x2 mt-3 items-center justify-center rounded-full ">
                            <input type="text" className="bg-transparent text-left  focus:outline-none" placeholder="Search Here" />
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-900 cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        {/* Secondary Nav */}
                    </div>
                    <div className="hidden md:flex items-center space-x-3">
                        <a href="#" className="py-2 px-3   hover:bg-blue-500 hover:text-white  rounded-full transition duration-300 shadow-md ">Login</a>
                        <a href="/signup" className="py-2 hover:bg-blue-500  hover:text-white p-2 rounded-full transition duration-300 shadow-md px-3 bg-blue-200 ">
                            <NavLink to="/signup">Sign Up</NavLink>
                        </a>
                    </div>
                    {/*Mobile Button  */}
                    <div className="md:hidden flex items-center">
                        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" class=" cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={state.close ? "block md:hidden" : "hidden"}>
                <a href="#" className="block text-sm px-4 py-3 hover:bg-gray-200 ">
                    <NavLink to="/products">Products</NavLink>
                </a>
                <a href="#" className="block text-sm px-4 py-3 hover:bg-gray-200 ">
                    <NavLink to="/precautions">Brands</NavLink>
                </a>
            </div>
        </nav>
    )
}

export default NavBar

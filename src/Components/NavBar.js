import logo from '../assets/Logo.png';
import { NavLink, Link } from 'react-router-dom'
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
        <nav className=" bg-gray-100">
            <div className="px-8 mx-auto">
                <div className="flex justify-between py-2">
                    {/* Logo */}
                    <div className="flex space-x-2">
                        <div className="flex items-center py-5 px-3 text-gray-600 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-400 mr-1 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                            </svg>
                            <span className="hover:text-gray-900 font-bold">Better Dev</span>
                        </div>
                        {/* Primary Nav */}
                        <div className="hidden md:flex items-center text-gray-600">
                            <ul className="flex space-x-2 ">
                                <li className="cursor-pointer hover:text-gray-900">Features</li>
                                <li className="cursor-pointer hover:text-gray-900">Pricing</li>
                            </ul>
                        </div>
                        {/* Secondary Nav */}
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        <a href="#" className="py-5 px-3 ">Login</a>
                        <a href="#" className="py-2 shadow-md px-3 bg-yellow-500 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-700 transition duration-300 rounded">Sign Up</a>
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
                <a href="#" className="block text-sm px-4 py-3 hover:bg-gray-200 ">Features</a>
                <a href="#" className="block text-sm px-4 py-3 hover:bg-gray-200 ">Pricing</a>
            </div>
        </nav>
    )
}

export default NavBar

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4 fixed top-0 w-full z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <h1>MyApp</h1>
                </div>
                <ul className="flex space-x-4">
                    <li><Link to="/home" className="hover:text-gray-300">Home</Link></li>
                    <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
                    <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-white text-lg font-bold">Your Logo</Link>

                {/* Navigation Links - Desktop */}
                <div className="hidden md:flex space-x-4">
                <Link to="/" className="text-white">Home</Link>
                <Link to="/about" className="text-white">About</Link>
                <Link to="/contact" className="text-white">Contact</Link>
                {/* Add more links as needed */}
                </div>

                {/* Hamburger Icon - Mobile */}
                <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                </div>

                {/* Modal - Mobile */}
                <Transition show={isOpen} enter="transition-opacity duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-300" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-4 rounded">
                        <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 text-gray-700">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        {/* Modal Content - Add links here */}
                        <Link to="/" className="block text-gray-800 py-2">Home</Link>
                        <Link to="/about" className="block text-gray-800 py-2">About</Link>
                        <Link to="/contact" className="block text-gray-800 py-2">Contact</Link>
                        {/* Add more links as needed */}
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    );
};

export default Navigation;

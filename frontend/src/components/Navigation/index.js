import React, { useState, Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import MobileLogo from './mobile-logo';
import logo from './csp-logo.gif';
import { useAccessibilityModal, useAccessibilitySettings } from '../../context/accessibility';
import { useNavigation } from '../../context/navigation';
import AccessibilityModal from '../AccessibilityModal';

export default function Navigation() {
    const navigate = useNavigate();

    const [openMobileNav, setOpenMobileNav] = useState(false);
    const [openAbout, setOpenAbout] = useState(false);
    const { showAccessibility, setShowAccessibility } = useAccessibilityModal();
    const { accessibilitySettings } = useAccessibilitySettings();
    const { darkMode, textSize, textSpacing } = accessibilitySettings;
    const { page, setPage } = useNavigation();

    return (
        <div className=''>
            {/* Desktop */}
            <div className={`fixed top-0 hidden md:flex w-full p-8 gap-4 z-10 ${darkMode ? "bg-gray-700/95" : "bg-white/95"}`}>
                <img src={logo} className='h-32'/>

                <div className='flex flex-col justify-end w-full gap-4 h-100'>
                    <div className='flex content-end items-center mr-2'>
                        <div className={`grow text-center font-newspaper font-bold md:text-4xl lg:text-5xl ${darkMode ? "text-white" : null}`}>
                            Columbus Square Park
                        </div>
                        <button onClick={() => setShowAccessibility(true)} className={`grow-0 text-end text-3xl rounded-full hover:bg-slate-300 p-2 ${darkMode ? "text-white hover:bg-slate-500" : null}`}>
                            {/* <i class="fa-solid fa-universal-access"></i> */}
                            <i class="fa-solid fa-eye"></i>
                        </button>
                    </div>
                    <div className="flex justify-evenly content-center w-full space-x-4 bg-primary p-1 rounded-md z-10">
                        <button onClick={() => navigate("/")} className={`grow m-0 text-center hover:bg-secondary rounded-md p-2 ${textSize && "text-lg"} ${textSpacing ? "tracking-wider" : null} ${page === 'home' && 'bg-fun text-white'}`}>
                            Home
                        </button>
                        <button onClick={() => navigate("/about")} className={`grow m-0 text-center hover:bg-secondary rounded-md p-2 ${textSize && "text-lg"} ${textSpacing ? "tracking-wider" : null} ${page === 'about' && 'bg-fun text-white'}`}>
                            About
                        </button>
                        <button onClick={() => navigate("/events")} className={`grow m-0 text-center hover:bg-secondary rounded-md p-2 ${textSize && "text-lg"} ${textSpacing ? "tracking-wider" : null} ${page === 'events' && 'bg-fun text-white'}`}>
                            Events
                        </button>
                        {/* <button onClick={() => {navigate("/programs")ms")}} className={`grow m-0 text-center hover:bg-secondary rounded-md p-2 ${textSize && "text-lg"} ${textSpacing ? "tracking-wider" : null} ${page === 'home' && 'bg-fun text-white'}`}>
                            Programs
                        </button> */}
                        <button onClick={() => navigate("/gallery")} className={`grow m-0 text-center hover:bg-secondary rounded-md p-2 ${textSize && "text-lg"} ${textSpacing ? "tracking-wider" : null} ${page === 'gallery' && 'bg-fun text-white'}`}>
                            Gallery
                        </button>
                        <button onClick={() => navigate("/contact")} className={`grow m-0 text-center hover:bg-secondary rounded-md p-2 ${textSize && "text-lg"} ${textSpacing ? "tracking-wider" : null} ${page === 'contact' && 'bg-fun text-white'}`}>
                            Contact
                        </button>
                    </div>
                </div>

                {showAccessibility && <AccessibilityModal />}
            </div>

            {/* Mobile */}
            <div className="md:hidden container fixed top-0 flex justify-between items-center bg-primary w-screen p-4">
                <Link to="/" className="md:hidden text-white text-lg font-bold min-h-min">
                    <MobileLogo />
                </Link>

                {/* Hamburger Icon - Mobile */}
                <div className="md:hidden">
                    <Menu as="div" className="relative inline-block text-left z-50">
                        <div>
                            <Menu.Button onClick={() => setOpenMobileNav(!openMobileNav)} className="bg-primary text-white rounded-lg focus:bg-secondary p-3">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            // enter="transition ease-out duration-100"
                            // enterFrom="transform opacity-0 scale-95"
                            // enterTo="transform opacity-100 scale-100"
                            // leave="transition ease-in duration-75"
                            // leaveFrom="transform opacity-100 scale-100"
                            // leaveTo="transform opacity-0 scale-95"
                            enter="transition ease-out duration-300 transform"
                            enterFrom="opacity-0 -translate-y-full scale-95"
                            enterTo="opacity-100 translate-y-0 scale-100"
                            leave="transition ease-in duration-200 transform"
                            leaveFrom="opacity-100 translate-y-0 scale-100"
                            leaveTo="opacity-0 -translate-y-full scale-95"
                        >
                            <Menu.Items className="fixed top-28 right-0 w-screen origin-top divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 ">
                                <div className='flex flex-col'>
                                    <Menu.Item>
                                        <Link to="/" className="py-3 text-center focus:bg-slate-200 border-b border-slate-200">Home</Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/about" className="py-3 text-center focus:bg-slate-200 border-b border-slate-200">About</Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/events" className="py-3 text-center focus:bg-slate-200 border-b border-slate-200">Events</Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/gallery" className="py-3 text-center focus:bg-slate-200 border-b border-slate-200">Gallery</Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/contact" className="py-3 text-center focus:bg-slate-200 border-b border-slate-200">Contact</Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <button onClick={() => setShowAccessibility(true)} className="py-3 text-center focus:bg-slate-200">
                                            Accessibility
                                        </button>
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

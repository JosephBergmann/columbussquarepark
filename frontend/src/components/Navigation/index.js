import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import MobileLogo from './mobile-logo';
import logo from './csp-logo.gif';
import { useAccessibility } from '../../context/accessibility';
import AccessibilityModal from '../AccessibilityModal';

export default function Navigation() {
    const [openMobileNav, setOpenMobileNav] = useState(false);
    const [openAbout, setOpenAbout] = useState(false);
    const {showAccessibility, setShowAccessibility} = useAccessibility()

    return (
        <div>
            {/* Desktop */}
            <div className='fixed top-0 hidden md:flex w-full p-8 gap-5 bg-white/95'>
                <img src={logo} className='h-32'/>

                <div className='flex flex-col justify-end w-full gap-5 h-100'>
                    <div className='flex content-end'>
                        <div className='grow text-center font-newspaper font-bold md:text-4xl lg:text-5xl'>
                            Columbus Square Park
                        </div>
                        <button onClick={() => setShowAccessibility(true)} className='grow-0 text-end text-3xl rounded-full hover:bg-slate-300 p-2 px-3'>
                            <i class="fa-regular fa-circle-question"></i>
                        </button>
                    </div>
                    <div className="flex justify-evenly content-center w-full space-x-4 bg-main rounded-md">
                        <Link to="/" className="grow m- 0 text-center hover:bg-teal-500 p-2">Home</Link>
                        <Link to="/about" className="grow m- 0 text-center hover:bg-teal-500 p-2">About</Link>
                        {/* <Menu as="div" className="grow m- 0 text-center hover:bg-teal-500 p-2">
                            <Menu.Button onClick={() => setOpenAbout(!openAbout)} className="">About</Menu.Button>
                            <Transition
                                as={Fragment}
                                // enter="transition ease-out duration-100"
                                // enterFrom="transform opacity-0 scale-95"
                                // enterTo="transform opacity-100 scale-100"
                                // leave="transition ease-in duration-75"
                                // leaveFrom="transform opacity-100 scale-100"
                                // leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="mt-2 w-inherit origin-top divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5">
                                    <div>
                                        <Menu.Item>
                                            <Link to="" className=''></Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link to="" className=''></Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link to="" className=''></Link>
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu> */}
                        <Link to="/events" className="grow m- 0 text-center hover:bg-teal-500 p-2">Events</Link>
                        {/* <Link to="/programs" className="grow m- 0 text-center hover:bg-teal-500 p-2">Programs</Link> */}
                        <Link to="/gallery" className="grow m- 0 text-center hover:bg-teal-500 p-2">Gallery</Link>
                        <Link to="/contact" className="grow m- 0 text-center hover:bg-teal-500 p-2">Contact</Link>
                    </div>
                </div>

                {showAccessibility && <AccessibilityModal />}
            </div>

            {/* Mobile */}
            <div className="md:hidden container flex justify-between items-center bg-green-900 w-screen p-4">
                <Link to="/" className="md:hidden text-white text-lg font-bold min-h-min">
                    <MobileLogo />
                </Link>

                {/* Hamburger Icon - Mobile */}
                <div className="md:hidden">
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button onClick={() => setOpenMobileNav(!openMobileNav)} className="bg-green-900 text-white rounded-lg focus:bg-green-950 p-3">
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
                            <Menu.Items className="fixed top-0 right-0 mt-2 w-screen origin-top divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 ">
                                <div className='flex flex-col'>
                                    <Menu.Item>
                                        <Link to="/" className="py-3 text-center text-green-900 focus:bg-slate-200 border-b border-slate-200">Home</Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/about" className="py-3 text-center text-green-900 focus:bg-slate-200 border-b border-slate-200">About</Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/events" className="py-3 text-center text-green-900 focus:bg-slate-200 border-b border-slate-200">Events</Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/gallery" className="py-3 text-center text-green-900 focus:bg-slate-200 border-b border-slate-200">Gallery</Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/contact" className="py-3 text-center text-green-900 focus:bg-slate-200">Contact</Link>
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

import React, { useState, Fragment } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import MobileLogo from '../Navigation/mobile-logo';
import LoginModal from '../LoginModal';
import { useLogin, useLogout } from '../../context/login';
import LogoutModal from '../LogoutModal';

export default function Footer() {
    const { showLogin, setShowLogin } = useLogin();
    const { showLogout, setShowLogout } = useLogout();

    const user = useSelector(state => state.session.user)

    const handleUser = () => {
        if (user) {
            setShowLogout(true)
        } else {
            setShowLogin(true)
        }
    }

    return (
        <div className="w-full bg-primary">
            <div className='flex flex-col md:flex-row justify-center md:justify-evenly px-8 py-12 gap-16 md:gap-0'>
                {/* <div className='flex flex-col max-w-80 gap-3 px-3'>
                    <h2 className='text-yellow-300 text-2xl font-newspaper'>About</h2>
                    <p className='text-white pr-3'>Columbus Square Park is a vibrant community gathering place located between 12th and 13th Streets and Wharton and Reed streets in the Passyunk Square neighborhood in South Philadelphia.</p>
                </div> */}
                <div className='flex flex-col gap-3 px-3'>
                    <h2 className='text-2xl font-newspaper'>Contact</h2>
                    <div>
                        <div className='text-white flex gap-3 mb-2 content-end items-center'>
                            <i class="fa-solid fa-phone"></i>
                            (215) 685-1590
                        </div>
                        <div className='text-white flex gap-3 mb-2 content-end items-center'>
                            <i class="fa-solid fa-envelope"></i>
                            info@mycolumbussquarepark.org
                        </div>
                        <div className='text-white flex gap-3 mb-2 content-end items-center'>
                            <i class="fa-brands fa-facebook"></i>
                            <Link to="https://www.facebook.com/friendsofcolumbussquare/" className='hover:underline'>Join us on Facebook!</Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3 px-3'>
                    <h2 className='text-2xl font-newspaper'>Related Links</h2>
                    <div className='text-white flex flex-col'>
                        <Link to="https://www.phila.gov/departments/philadelphia-parks-recreation/" className='mb-2 hover:underline'>Philadelphia Parks & Recreation</Link>
                        <Link to="https://www.facebook.com/groups/241921246469738/" className='mb-2 hover:underline'>South Philadelphia Dog Owners Association (SPDOA)</Link>
                        <Link to="https://www.drpipes.com/pa/philadelphia.html" className='mb-2 hover:underline'>Plumbers Near Philadelphia</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-3 px-3'>
                    <h2 className='text-2xl font-newspaper'>Admin</h2>
                    <button onClick={() => handleUser()} className='py-2 px-4 md:px-8 bg-yellow-500 text-white rounded-xl border border-yellow-500 active:bg-slate-200 active:border active:border-slate-200 min-w-min whitespace-nowrap'>
                        {user ? "Log Out" : "Log In"}
                    </button>
                </div>
            </div>

            {showLogin && <LoginModal />}
            {showLogout && <LogoutModal />}
        </div>
    )
}

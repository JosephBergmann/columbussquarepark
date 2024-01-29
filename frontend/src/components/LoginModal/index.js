import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Transition, Switch, Tab } from '@headlessui/react';
import { useLogin } from '../../context/login';
import { login } from '../../store/session';
import {useDispatch} from 'react-redux'

export default function LoginModal() {
    const dispatch = useDispatch()
    const { showLogin, setShowLogin } = useLogin()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (email, password) => {
        const credentials = {email, password}
        console.log("credentials - handle submit", credentials)
        const data = await dispatch(login(credentials))
        return;
    }

    return (
        <Transition appear show={showLogin} as={Fragment}>
            <Dialog as="div" className="fixed z-100" onClose={() => setShowLogin(false)}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className={`bg-white w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all`}>
                        <Dialog.Title
                            as="h1"
                            className="leading-6 text-gray-900 text-xl"
                        >
                            Admin Login
                        </Dialog.Title>
                        <div className="mt-2">
                            <p className={`text-sm text-gray-500`}>
                                Please enter your email and password below.
                            </p>
                        </div>
                        <div className="mt-4">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="my-2 p-2 border border-gray-300 rounded-md w-full"
                                placeholder='Email'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="my-2 p-2 border border-gray-300 rounded-md w-full"
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className='flex justify-center'>
                                <button onClick={() => handleSubmit(email, password)} className='mt-4 py-3 px-8 bg-secondary rounded-xl active:bg-gray-300'>
                                    Login
                                </button>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
            </div>
            </Dialog>
        </Transition>
    )
}

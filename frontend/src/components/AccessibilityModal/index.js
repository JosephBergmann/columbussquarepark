import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Transition, Switch, Tab } from '@headlessui/react';
import { useAccessibility } from '../../context/accessibility';

export default function AccessibilityModal() {
    const {showAccessibility, setShowAccessibility} = useAccessibility();
    const [darkMode, setDarkMode] = useState(false);
    const [textSize, setTextSize] = useState("base")

    return (
        <Transition appear show={showAccessibility} as={Fragment}>
            <Dialog as="div" className="fixed z-100" onClose={() => setShowAccessibility(false)}>
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
                        <Dialog.Panel className={`w-full max-w-md transform overflow-hidden rounded-2xl ${darkMode ? "bg-black" : "bg-white"} p-6 text-left align-middle shadow-xl transition-all`}>
                            <Dialog.Title
                                as="h1"
                                className={`${darkMode ? "text-white" : null} ${textSize === 'lg' ? "text-2xl" : "text-xl"} leading-6 text-gray-900`}
                            >
                                Accessibility
                            </Dialog.Title>
                            <div className="mt-2">
                                <p className={`${textSize === 'lg' ? "text-base" : "text-sm"} ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                                    Customize your experience tailored to your preferences.
                                </p>
                            </div>
                            <div className='py-1 w-full'>
                                <div className='grid grid-cols-2 items-center mt-6'>
                                    <div className={`${darkMode ? "text-white" : null} ${textSize === 'lg' ? "text-lg" : "text-base"}`}>Dark Mode</div>
                                    <Switch
                                        checked={darkMode}
                                        onChange={() => setDarkMode(!darkMode)}
                                        className={`${
                                            darkMode ? 'bg-secondary' : 'bg-gray-300'
                                        } relative inline-flex h-6 w-10 items-center rounded-full`}
                                        >
                                        <span className="sr-only">Enable notifications</span>
                                        <span
                                            className={`${
                                            darkMode ? 'translate-x-5' : 'translate-x-1'
                                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                        />
                                    </Switch>
                                </div>
                                <div className='grid grid-cols-2 items-center mt-6'>
                                    <div className={`${darkMode ? "text-white" : null} ${textSize === 'lg' ? "text-lg" : "text-base"}`}>Text Size</div>
                                    <div>
                                        <Tab.Group>
                                            <Tab.List className="grid grid-cols-2 bg-gray-200 rounded-xl">
                                                <Tab as={Fragment}>
                                                    {({ selected}) => (
                                                            <button
                                                                className={`md:px-4 py-2 m-1 rounded-lg ${selected ? 'bg-secondary' : 'bg-gray-200 hover:bg-gray-300'}`}
                                                                onClick={() => setTextSize('base')}
                                                            >
                                                                Normal
                                                            </button>
                                                    )}
                                                </Tab>
                                                <Tab as={Fragment}>
                                                    {({ selected}) => (
                                                            <button
                                                                className={`md:px-4 py-2 m-1 rounded-lg text-lg ${selected ? 'bg-secondary' : 'bg-gray-200 hover:bg-gray-300'}`}
                                                                onClick={() => setTextSize('lg')}
                                                            >
                                                                Large
                                                            </button>
                                                    )}
                                                </Tab>
                                            </Tab.List>
                                        </Tab.Group>
                                    </div>
                                    {/* <div className='my-3'>
                                        <div className='grid grid-cols-2 items-center'>
                                            <div className='ml-5'>Normal</div>
                                            <Switch
                                                checked={darkMode}
                                                onChange={() => setDarkMode(!darkMode)}
                                                className={`${
                                                    darkMode ? 'bg-main' : 'bg-gray-300'
                                                } relative inline-flex h-6 w-10 items-center rounded-full`}
                                                >
                                                <span className="sr-only">Enable notifications</span>
                                                <span
                                                    className={`${
                                                    darkMode ? 'translate-x-5' : 'translate-x-1'
                                                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                                />
                                            </Switch>
                                        </div>
                                    </div> */}
                                </div>
                                <div className='w-full flex justify-center'>
                                    <button className='mt-10 py-3 px-8 bg-secondary rounded-xl active:bg-gray-300'>
                                        Confirm
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

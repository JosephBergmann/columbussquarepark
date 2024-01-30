import React, { useState, Fragment } from 'react';
import { Dialog, Transition, Switch, Tab } from '@headlessui/react';
import { useAccessibilitySettings } from '../../context/accessibility';
import DogPark from './dogpark';
import GardenPolicy from './garden';
import cspMap from './csp-map.jpg';


// aboutView = ['doge', 'garden', 'art']

export default function About() {
    const { accessibilitySettings } = useAccessibilitySettings();
    const { darkMode, textSize } = accessibilitySettings;

    const [aboutView, setAboutView] = useState('map')

    return (
        <div className="mt-6 mb-20">
            <div className="my-4 mb-10">
                <h1 className={`${darkMode && "text-white"} ${textSize ? "text-3xl" : "text-2xl"} leading-6 pb-4`}>About</h1>
                <p className={`${darkMode && "text-white"} ${textSize ? "text-lg" : null} mt-4`}>Columbus Square Park is a vibrant community gathering place located between 12th and 13th Streets and Wharton and Reed streets in the Passyunk Square neighborhood in South Philadelphia.</p>
                <p className={`${darkMode && "text-white"} ${textSize ? "text-lg" : null} mt-4`}>Columbus Square provides a diverse array of amenities for both residents and visitors. Whether you're a dog lover, a parent with young children, a sports enthusiast, or simply someone who appreciates a moment of tranquility, Columbus Square caters to all. Explore our rose garden and meandering nature walk that encircles the park, offering a delightful experience for nature enthusiasts. Serving as an oasis from the urban hustle and bustle, Columbus Square is a dynamic community space that continues to evolve.</p>
                <p className={`${darkMode && "text-white"} ${textSize ? "text-lg" : null} mt-4`}>Come experience Columbus Square for yourself. Volunteer and GET ENGAGED!</p>
            </div>
            <div>
                <Tab.Group>
                    <Tab.List className="grid grid-cols-3 bg-primary rounded-xl">
                     <Tab as={Fragment}>
                            {({ selected}) => (
                                    <button
                                        className={`md:px-4 py-2 m-1 rounded-lg text-lg ${selected ? 'bg-fun' : 'bg-primary hover:bg-secondary'} ${textSize && "text-xl"}`}
                                        onClick={() => setAboutView('map')}
                                    >
                                        Map
                                    </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected}) => (
                                    <button
                                        className={`md:px-4 py-2 m-1 rounded-lg text-lg ${selected ? 'bg-fun' : 'bg-primary hover:bg-secondary'} ${textSize && "text-xl"}`}
                                        onClick={() => setAboutView('dog')}
                                    >
                                        Dog Park Rules
                                    </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected}) => (
                                    <button
                                        className={`md:px-4 py-2 m-1 rounded-lg text-lg ${selected ? 'bg-fun' : 'bg-primary hover:bg-secondary'} ${textSize && "text-xl"}`}
                                        onClick={() => setAboutView('garden')}
                                    >
                                        Garden Policy
                                    </button>
                            )}
                        </Tab>
                    </Tab.List>
                </Tab.Group>
                <div className={`rounded-xl bg-slate-200 mt-4 mb-10 ${darkMode && "bg-gray-800"}`}>
                    {aboutView === 'dog' && <DogPark />}
                    {aboutView === 'garden' && <GardenPolicy />}
                    {aboutView === 'map' && <div className='p-8 flex justify-center'>
                        <img src={cspMap} />
                    </div>}
                </div>
            </div>
        </div>
    )
}

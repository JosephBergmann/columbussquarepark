import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import './App.css'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './components/About';
import { useDispatch } from "react-redux"
import { authenticate } from './store/session';
import { useAccessibilitySettings } from './context/accessibility';
import Contact from './components/Contact';
import Events from './components/Events';
import { fetchAll } from './store/allData';
import Gallery from './components/Gallery';


const App = () => {
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState()

    const { accessibilitySettings, setAccessibilitySettings } = useAccessibilitySettings();
    const { darkMode, textSize } = accessibilitySettings;

    useEffect(() => {
        dispatch(authenticate()).then(() => setIsLoaded(true))
        dispatch(fetchAll()).then(() => console.log('Fetched All'))
    }, [dispatch])

    return (
        <Router>
            <div className={`${darkMode && 'bg-gray-700'}`}>
                <Navigation />
                <div className={`flex-grow pt-32 md:pt-48 md:px-32`}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/events" element={<Events />} />
                        <Route path='/gallery' element={<Gallery />} />
                    {/* Other routes can be added here */}
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

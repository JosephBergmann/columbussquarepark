import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import './App.css'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { useDispatch } from "react-redux"
import { authenticate } from './store/session';

const App = () => {
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState()
    useEffect(() => {
        dispatch(authenticate()).then(() => setIsLoaded(true))
    }, [dispatch])

    return (
        <Router>
            <Navigation />
            <div className='flex-grow md:pt-48 md:px-32'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* Other routes can be added here */}
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;

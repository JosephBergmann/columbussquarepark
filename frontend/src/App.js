import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import './App.css'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './components/About';

const App = () => {
    return (
        <Router>
            <Navigation />
            <div className='flex-grow pt-32 md:pt-48 md:px-32'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    {/* Other routes can be added here */}
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Assuming Home.js is in the same directory
import './App.css'
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <Navigation />
            <div className='flex-grow md:pt-48 md:px-8'>
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

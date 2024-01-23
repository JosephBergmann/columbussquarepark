import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Assuming Home.js is in the same directory
import Navigation from './components/Navigation';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Other routes can be added here */}
            </Routes>
        </Router>
    );
}

export default App;

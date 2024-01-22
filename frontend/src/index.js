import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// function Root() {
// 	return (
// 					<BrowserRouter>
// 						<App />
// 					</BrowserRouter>
// 	);
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import App from './App'; // Importing the main App component
// import Home from './Home'; // Importing the Home component
// import './index.css'; // Importing CSS for global styles

// // Create a root element
// const root = ReactDOM.createRoot(document.getElementById('root'));

// // Render the App component inside the Router
// root.render(
//     <React.StrictMode>
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 {/* Other routes can be added here */}
//             </Routes>
//         </Router>
//     </React.StrictMode>
// );

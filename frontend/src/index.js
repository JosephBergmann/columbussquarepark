import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import store from './store'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { AccessibilityProvider } from "./context/accessibility.js"
import { LoginProvider } from "./context/login.js"
import { EventFormProvider } from './context/eventForm.js';

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <EventFormProvider>
      <AccessibilityProvider>
        <LoginProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </LoginProvider>
      </AccessibilityProvider>
    </EventFormProvider>
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

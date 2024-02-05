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
import { NavigationProvider } from './context/navigation';
import { configureStore } from '@reduxjs/toolkit';

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <EventFormProvider>
      <AccessibilityProvider>
        <NavigationProvider>
          <LoginProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </LoginProvider>
        </NavigationProvider>
      </AccessibilityProvider>
    </EventFormProvider>
  </React.StrictMode>
);

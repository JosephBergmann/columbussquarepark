import {configureStore, applyMiddleware } from '@reduxjs/toolkit'
import sessionReducer from './session'
import imageReducer from './images'
import eventReducer from './events'
import { thunk } from 'redux-thunk'
import logger from 'redux-logger'

const store = configureStore({
    reducer: {
        session: sessionReducer,
        images: imageReducer,
        events: eventReducer
    },
    middleware: (getDefaultMiddleware) => {
        if (process.env.NODE_ENV === 'production') {
            return getDefaultMiddleware().concat(thunk)
        } else {
            return getDefaultMiddleware().concat(logger).concat(thunk)
        }
    },
})


export default store

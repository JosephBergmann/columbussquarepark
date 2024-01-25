import {configureStore, applyMiddleware } from '@reduxjs/toolkit'
import sessionReducer from './session'
import { thunk } from 'redux-thunk'
import logger from 'redux-logger'

const store = configureStore({
    reducer: {
        session: sessionReducer
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

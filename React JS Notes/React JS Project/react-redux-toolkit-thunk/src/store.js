import { configureStore } from "@reduxjs/toolkit";
import productReducer  from './reducer/productSlice'
//import thunk from '@reduxjs/toolkit'
import logger from 'redux-logger';
const storeRef = configureStore({
    reducer:{
        products:productReducer,
        
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

export default storeRef;
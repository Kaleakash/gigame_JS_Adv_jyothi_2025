import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


let PRODUCT_URL  ="http://localhost:3000/products"

// Asynchronous thunk for fetching products 

export const fetchProducts = createAsyncThunk("products/fetchProducts",async()=> {
    const response = await axios.get(PRODUCT_URL);
    return response.data;
})

export const storeProduct = createAsyncThunk("products/storeProducts",async(product)=> {
    const response = await axios.post(PRODUCT_URL,product);
    return response.data;
})

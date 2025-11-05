import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import productReducer from "./ProductSlice";

let storeRef = configureStore({
    reducer: {counter:counterReducer ,product:productReducer},

})

export default storeRef;
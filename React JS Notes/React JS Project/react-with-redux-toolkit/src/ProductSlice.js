import { createSlice } from "@reduxjs/toolkit";

let productSlice = createSlice({
    name: "product",
    initialState: { productsInfo:[
        {pid:1, pname:"Laptop", price:45000},
        {pid:2, pname:"Mobile", price:25000},
        {pid:3, pname:"Tablet", price:15000}
    ]},
    reducers: {
        addProduct:(state,actions)=> {
            console.log("Adding Product", actions.payload);
            state.productsInfo.push(actions.payload);
        }
    }
});

export let { addProduct } = productSlice.actions;
export default productSlice.reducer;
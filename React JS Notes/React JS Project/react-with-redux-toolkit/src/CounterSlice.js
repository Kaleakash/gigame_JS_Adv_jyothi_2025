import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0,name:"Akash" },
    reducers: {
        increment: (state) => {
            console.log("Incrementing");
            state.value = state.value + 1;
        },
        decrement: (state) => {
            console.log("Decrementing");
            state.value = state.value - 1;
        }
    }
});

export let { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
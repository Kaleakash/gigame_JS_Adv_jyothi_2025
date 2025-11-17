const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    title:"Product Management System using react redux toolkit with axios",
    productList:[],
    loading:false,
    error:null
}
const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=> {
        builder.addCase("products/fetchProducts/pending",(state)=> {
        console.log("pending...") 
        state.loading=true
        state.error=null;
        }).addCase("products/fetchProducts/fulfilled",(state,action)=> {
        console.log("fulfilled")
        state.loading=false;
            state.productList=action.payload
        state.error=null;
        console.log(action)
        }).addCase("products/fetchProducts/rejected",(state,action)=> {
        console.log("rejected")
        state.loading=false;
        state.error= action.error.message
        console.log(action)
        }).addCase("products/storeProducts/pending",(state)=> {
        console.log("store pending...") 
        state.loading=true
        state.error=null;
        }).addCase("products/storeProducts/fulfilled",(state,action)=> {
        console.log("fulfilled")
        state.loading=false;
            state.productList.push(action.payload)
        state.error=null;
        console.log(action)
        }).addCase("products/storeProducts/rejected",(state,action)=> {
        console.log("rejected")
        state.loading=false;
        state.error= action.error.message
        console.log(action)
        })
    }
})

export default productSlice.reducer;

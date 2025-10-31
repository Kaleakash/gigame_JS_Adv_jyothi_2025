let initialState = {
    n:100,
    fname:"Akash",
    product:{pid:100,pname:"Tv",price:45000}
}

function reducer(state=initialState,action){
    // using some action we can do some changes on state 

    console.log("Event fired")
    console.log(action)
    if(action.type=="INCREMENT_VALUE"){
        return {...state,n:state.n+1}
    }
    if(action.type=="DECREMENT_VALUE"){
        return {...state,n:state.n-1}
    }
    if(action.type=="UPDATE_PRODUCT"){
        return {...state,product:{...state.product,price:action.payload.price,pname:"Sony Tv"}}
    }
    return state;
}

export default reducer;
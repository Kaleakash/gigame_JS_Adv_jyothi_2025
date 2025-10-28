import { useState } from "react";
import Child1 from "./Child1";
import { MyContext } from "./MyContext";

function Parent() {
let [n,setN]=useState(100)
    return(
        <MyContext.Provider value={{n,setN}}>
        <div>
                <h2>Parent Component</h2>
                <p>N value is {n}</p>
                <Child1></Child1>
        </div>
        </MyContext.Provider>
    )
}

export default Parent;
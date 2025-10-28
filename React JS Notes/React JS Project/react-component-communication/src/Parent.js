import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
let [admin,setAdmin]=useState("admin@gmail.com");       // local state variable 
let [user1Value,setUser1Value]=useState("");
let [user2Value,setUser2Value]=useState("");

let receiveValueFromChild1=(data)=> {
    //console.log(data)
    setUser1Value(data)
}
let receiveValueFromChild2=(data)=> {
    //console.log(data)
    setUser2Value(data)
}
    return(
        <div style={{"backgroundColor":"yellow"}}>
            <h3>Parent Component</h3>
            <p>Admin name in parent component is {admin}</p>
                <Child1 parentName={admin} passValueToParent={receiveValueFromChild1} child2Value={user2Value}></Child1>
                <Child2 parentName={admin} passValueToParent={receiveValueFromChild2} child1Value={user1Value}></Child2>
            <p>User1 name in parent component is {user1Value}</p>
            <p>User2 name in parent component is {user2Value}</p>
        </div>
    )
}

export default Parent;
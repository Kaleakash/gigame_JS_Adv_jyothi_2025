import { useState } from "react";

function Child2(props) {
let [user2,setUser2]=useState("john@gmail.com");  // local state variable 
    return(
        <div  style={{"backgroundColor":"gray"}}>
            <h3>Child2 Component</h3>
            <p>Admin name in child2 component is {props.parentName}</p>
            <p>User2 value in child2 component is {user2} </p>
            <p>User1 name in child2 component is{props.child1Value}</p>
            {props.passValueToParent(user2)}
        </div>
    )
}

export default Child2;
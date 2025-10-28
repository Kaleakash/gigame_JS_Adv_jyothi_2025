import { useState } from "react";

function Child1(props) {
let [user1,setUser1]=useState("steven@gmail.com");  // local state variable 
let passToParent= ()=> {
    props.passValueToParent(user1)
}
    return(
        <div  style={{"backgroundColor":"orange"}}>
            <h3>Child1 Component</h3>
            <p>Admin name in child1 component is {props.parentName}</p>
            <p>User1 name in child1 component is {user1}</p>
            <p>User2 name in child1 component is{props.child2Value}</p>
            <input type="button" value="Pass Value to Parent" onClick={passToParent}/>
        </div>
    )
}

export default Child1;
import { useState } from "react";
import { useSelector } from "react-redux";

function FirstComponent() {
let [name,setName]=useState("Ajay");
let fname  = useSelector(gs=>gs.fname);

return(
    <div>
        <h2>First Component</h2>
        <p>Local state variable part of First component is {name}</p>
        <p>Global state variable part of store is {fname}</p>
    </div>
)
}

export default FirstComponent;
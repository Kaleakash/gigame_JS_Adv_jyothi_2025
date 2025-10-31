import { useState } from "react";
import { useSelector } from "react-redux";

function SecondComponent() {
let [name,setName]=useState("Raj")
let fname  = useSelector(gs=>gs.fname);
return(
    <div>
        <h2>Second Component</h2>
        <p>Local state variable part of second component is {name}</p>
        <p>Global state variable part of store is {fname}</p>
    </div>
)
}

export default SecondComponent;
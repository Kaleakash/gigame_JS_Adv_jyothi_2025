import { useContext } from "react";
import { MyContext } from "./MyContext";

function Child3() {
let ref = useContext(MyContext);
let changeValue= ()=> {
    ref.setN(200);
}
    return(
        <div>
            <h2>Child3 Component</h2>
            <p>N Variable value in child3 component is {ref.n}</p>
            <input type="button" value="Update value" onClick={changeValue}/>
        </div>
    )
}

export default Child3;
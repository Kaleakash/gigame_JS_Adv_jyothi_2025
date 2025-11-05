import { useDispatch } from "react-redux";
import {increment} from "./CounterSlice";
function IncrementComponent() {
let dispatch = useDispatch();
    let incrementValue = () => {
        //alert("event triggered");
        dispatch(increment());
    }
    return(
        <div>
            <h3>Increment Component</h3>
            <input type="button" value="Increment" 
            onClick={incrementValue}
            />
        </div>
    )
}

export default IncrementComponent;
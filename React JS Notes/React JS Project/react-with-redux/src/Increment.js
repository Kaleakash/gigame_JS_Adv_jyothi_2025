import { useDispatch, useSelector } from "react-redux";

function Increment() {
let n= useSelector(gs=>gs.n);
let dispatch = useDispatch();
let incrementValueFun= ()=> {
    dispatch({type:"INCREMENT_VALUE"})
}
return(
    <div>
        <h2>Increment Component</h2>
        <p>Value of n is {n}</p>
        <input type="button" value="increment"
        onClick={incrementValueFun}/>
    </div>
)

}

export default Increment;
import { useDispatch, useSelector } from "react-redux";

function Decrement() {
let n= useSelector(gs=>gs.n);
let dispatch = useDispatch();
let decrementValueFun= ()=> {
    dispatch({type:"DECREMENT_VALUE"})
}
return(
    <div>
        <h2>Decrement Component</h2>
        <p>Value of n is {n}</p>
        <input type="button" value="decrement"
        onClick={decrementValueFun}/>
    </div>
)

}

export default Decrement;
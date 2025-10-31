import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Product() {
let [price,setPrice]=useState("");
let p  = useSelector(gs=>gs.product)
let dispatch = useDispatch();

let updateProductInfo = (event)=> {
    event.preventDefault();
    dispatch({type:"UPDATE_PRODUCT",payload:{price:price}});
    setPrice("");
}
    return(
        <div>
            <h3>Product Component</h3>
            <p>Pid {p.pid} PName {p.pname} and Price {p.price}</p>
            <br/>
            <form onSubmit={updateProductInfo}>
                <label>Price</label>
                <input type="number" name="price" value={price}
                onChange={(event)=>setPrice(event.target.value)}
                /><br/>
                <input type="submit" value="Update Product"/>

            </form>
        </div>
    )
}
export default Product;
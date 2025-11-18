import { useState } from "react";
import { useDispatch } from "react-redux";
import { storeProduct } from "../actions/productActions";

function AddProduct() {
let [product,setProduct]=useState({});
let dispatch = useDispatch();
let storeProductInStore = (event)=> {
    //event.preventDefault();
    console.log(product);
    dispatch(storeProduct(product));
    setProduct({pname:"",price:0.0,stock:0});
}
    return(
        <div>
            <h3>Add Product</h3>
            <form onSubmit={storeProductInStore}>
                <label>PName</label>
                <input type="text" name="pname"
                value={product.name} 
                onChange={(event)=>setProduct({...product,"pname":event.target.value})}/><br/>

                <label>Price</label>
                <input type="number" name="price"
                value={product.price} 
                onChange={(event)=>setProduct({...product,"price":event.target.value})}/><br/>

                <label>Stock</label>
                <input type="number" name="stock"
                value={product.stock} 
                onChange={(event)=>setProduct({...product,"stock":event.target.value})}/><br/>

                <input type="submit" value="Store Product"/>
                <input type="reset" value="reset"/>

            </form>
        </div>
    )
}

export default AddProduct;
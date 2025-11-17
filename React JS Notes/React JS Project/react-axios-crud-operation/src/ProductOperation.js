import axios from "axios";
import {useEffect, useState } from "react";
function ProductOperation() {
let PRODUCT_URL="http://localhost:3000/products";
let [products,setProducts]=useState([]);
let [pname,setPname]= useState("");
let [price,setPrice]= useState(0);
let [stock,setStock]= useState(0);
let [result,setResult]= useState("");
let [id,setId]=useState(0);
let [submitValueValue,setSubmitValueValue]= useState("Add Product");
useEffect(()=> {
    //axios.get(PRODUCT_URL)
    let loadData = async () => {
    // ES6 style 
    try{
    let result  = await axios.get(PRODUCT_URL);
    //console.log(result.data);
    setProducts(result.data);
    }catch(error){
    console.log(error);
    }
    // ES5 style
    //axios.get(PRODUCT_URL).then(result=>console.log(result.data)).catch(error=>console.log(error) );
    // ES5 with fetch function 
    //fetch(PRODUCT_URL).then(response=>response.json()).then(result=>console.log(result)).catch(error=>console.log(error) );
    }
    loadData();
},[result])

let storeProductOrUpdate= async (event)=> {
    event.preventDefault();
    let product = {pname,price,stock};// convert to object 
    // post method takes two arguments (url, data)
    if(submitValueValue==="Update Product"){
        let result = await axios.put(PRODUCT_URL+"/"+id,product)
        console.log(result.data);
        setResult(result.data.id);  // to trigger useEffect
        setSubmitValueValue("Add Product");
    }else {
            let result = await axios.post(PRODUCT_URL,product)
        console.log(result.data);
        setResult(result.data.id);  // to trigger useEffect
    }
    setPname("");
    setPrice(0);
    setStock(0);
}
let deleteProduct= async (id)=> {
    //alert("Delete Product with Id: "+id);
    let result = await axios.delete(PRODUCT_URL+"/"+id)
    console.log(result.data);
    setResult(result.data.id);  // to trigger useEffect
}
let readyToUpdate = (product)=> {
    //alert(product)
    console.log(product);
        setPname(product.pname);
        setPrice(product.price);
        setStock(product.stock);
        setId(product.id);
    setSubmitValueValue("Update Product");
}
    return(
        <div>
            <h3>Product CRUD Operation</h3>
            <form onSubmit={storeProductOrUpdate}>
                <label>Product Name: </label>
            <input type="text" value={pname} onChange={e=>{console.log(e.target.value);setPname(e.target.value)}}></input>
                <br></br>
                <label>Product Price: </label>
                <input type="number" value={price} onChange={e=>setPrice(e.target.value)}></input>
                <br></br>
                <label>Product Stock: </label>
                <input type="number" value={stock} onChange={e=>setStock(e.target.value)}></input>
                <br></br>
                <input type="submit" value={submitValueValue}></input>
            </form>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products.map(product=> 
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.pname}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <input type="button" value="Delete" onClick={()=>deleteProduct(product.id)}/>
                            </td>
                            <td>
                                <input type="button" value="Update" onClick={()=>readyToUpdate(product)}/>
                            </td>
                        </tr>)
                    }
                    </tbody>
            </table>
        </div>
    )
    
}

export default ProductOperation;
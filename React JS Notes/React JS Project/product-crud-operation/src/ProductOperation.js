import { useState } from "react";

function ProductOperation() {
let [pid,setPid]=useState("");
let [pname,setPname]=useState("");
let [price,setPrice]=useState("");

let [products,setProducts]=useState([]);
let [submitButton,setSubmitButton]=useState("Add Product");

let handleSubmit = (event)=>{
    event.preventDefault();     // disable auto refresh
    //console.log("event fired")
    //console.log(pid+" "+pname+" "+price);
    if(submitButton === "Add Product"){
    
    let newProduct = {pid:pid,pname:pname,price:price};
    let result = products.find(p=>p.pid == pid);
    if(result!==undefined){
            alert("Product Id already exists");
    }else {
    setProducts([...products,newProduct]);  // 1st parameter using spread operator append 2nd parameter newProduct to products
    }

    }else {

        let searchProduct = products.find(p=>p.pid == pid);
        if(searchProduct!==undefined) {
            searchProduct.pname = pname;
            searchProduct.price = price;
            setProducts([...products]);
            setSubmitButton("Add Product");
        }else {
            alert("Product not present");
        }

    }
    
    setPid("");
    setPname("");
    setPrice("");
}
let deleteProduct= (pid)=> {
    let index = products.findIndex(p=>p.pid = pid);
    if(index!==-1) {
        products.splice(index,1);  // delete 1 element from index position
        setProducts([...products]);
    }else {
        alert("Product Id not found");
    }
}
let readyToUpdateProduct=(product)=> {
    console.log(product);
    setPid(product.pid);
    setPname(product.pname);
    setPrice(product.price);
    setSubmitButton("Update Product");
}
    return(
        <div>
            <h3>Product CRUD Operation</h3>
            <form onSubmit={handleSubmit}>
                <label>Product Id</label>
                <input type="text" name="pid" onChange={(event)=>setPid(event.target.value)} value={pid}/><br/>
                <label>Product PName</label>
                <input type="text" name="pname" onChange={(event)=>setPname(event.target.value)} value={pname}/><br/>
                <label>Product Price</label>
                <input type="text" name="price" onChange={(event)=>setPrice(event.target.value)} value={price}/><br/>
                <input type="submit" value={submitButton}/>
                <input type="reset" value="reset"/>
            </form>
            <hr/>
            <h2>All Product details</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Delete Operation</th>
                        <th>Update Product</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((p,index)=>
                            <tr key={index}>
                                <td>{p.pid}</td>
                                <td>{p.pname}</td>
                                <td>{p.price}</td>
                                <td>
                                    <input type="button" value="Delete" onClick={()=>deleteProduct(p.pid)}/>
                                </td>
                                <td>
                                    <input type="button" value="Update" onClick={()=>readyToUpdateProduct(p)}/>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductOperation;
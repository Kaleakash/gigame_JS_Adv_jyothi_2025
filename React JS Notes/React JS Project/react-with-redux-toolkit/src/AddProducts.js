import { useDispatch } from "react-redux";

function AddProduct() {
let dispatch = useDispatch();

let addProductDetails = ()=> {
    dispatch({type:"product/addProduct",
    payload:{pid:4, pname:"Smart Watch", price:8000}
    });
}
    return(
        <div>
            <h2>Add Products</h2>
            <input type="button" value="Add Product"
            onClick={addProductDetails}/>
            
        </div>
    )
}

export default AddProduct;
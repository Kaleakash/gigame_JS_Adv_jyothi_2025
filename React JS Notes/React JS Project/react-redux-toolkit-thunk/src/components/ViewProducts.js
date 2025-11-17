import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../actions/productActions";

function ViewProducts() {

let title = useSelector(gs=>gs.products.title)
let dispatch = useDispatch();
const products = useSelector(gs=>gs.products.productList);
const loading = useSelector(gs=>gs.products.loading)
const error = useSelector(gs=>gs.products.error);
useEffect(()=> {
    dispatch(fetchProducts());
},[])
    if(loading) return <h2>Loading....</h2>
    if(error) return <h2>{error}</h2>

    return(
        <div>
            <h2>{title}</h2>
            <h3>View All Products</h3>
            <ul>
            {
                products.map(p=> 
                  <li key={p.id}> Id is  {p.id} Name is {p.pname} price is {p.price} Stock is {p.stock}</li>  
                )
            }
            </ul>
        </div>
    )
}

export default ViewProducts;
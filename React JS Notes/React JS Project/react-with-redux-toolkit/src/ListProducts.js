import { useSelector } from "react-redux";

function ListProducts(){
let products = useSelector((state)=>state.product.productsInfo);

    return (
        <div>
            <h2>All Products</h2>
            <p>Number of products are {products.length}</p>
            <table border="1" style={{margin:"0 auto"}}>
                <thead>
                    <tr> 
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product)=>
                        <tr key={product.pid}>
                            <td>{product.pid}</td>
                            <td>{product.pname}</td>
                            <td>{product.price}</td>
                        </tr>
                    )} 
                </tbody>
                </table> 
        </div>
    )
}

export default ListProducts;
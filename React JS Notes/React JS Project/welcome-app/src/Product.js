import react from "react";

class Product extends react.Component{

    constructor() {
        super();
        this.state = {pname:"TV",price:56000}
        this.changeValue1 = this.changeValue1.bind(this);
    }
    changeValue1() {                // normal function
        alert("Button clicked");
        this.setState({price:45000});
    }
    changeValue2= ()=> {        // arrow function
        alert("Button clicked");
        this.setState({price:48000});
    }
    render() {

        return (
        
        <div>
            
            <h2>Welcome to Product Component</h2>
            <p>PName is {this.state.pname} and price is {this.state.price}</p>
            <input type="button" value="Change price - normal function" onClick={this.changeValue1} />
            <input type="button" value="Change price - arrow function" onClick={this.changeValue2} />
        </div>

        )
    }

}

export default Product;
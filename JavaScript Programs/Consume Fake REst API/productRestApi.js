// using ES5 style 
// function loadProductData() {
//     fetch("https://dummyjson.com/products").
//     then(response=>response.json()).
//     then(result=>console.log(result.products)).
//     catch(error=>console.log(error))
// }
// using ES6 style 
// async function loadProductData() {
//     let response = await fetch("https://dummyjson.com/products");
//     let result = await response.json();
//     console.log(result.products);   
// }


// display data on browser 
async function loadProductData() {
    let response = await fetch("https://dummyjson.com/products");
    let result = await response.json();
    //console.log(result.products);   
    
    for(let i =0;i<result.products.length;i++){
        let data = result.products[i];
        let divTag = document.createElement("div");
        let divTagContent = document.createTextNode(data.title)
        divTag.appendChild(divTagContent);  
            let imageTag = document.createElement("img")
            imageTag.setAttribute("src",data.thumbnail);
            imageTag.setAttribute("width","100px")
            imageTag.setAttribute("height","100px") 
        divTag.appendChild(imageTag)
    document.getElementsByTagName("body")[0].appendChild(divTag);
    }
     
}
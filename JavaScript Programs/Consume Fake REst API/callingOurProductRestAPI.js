async function loadProductData() {
    let response = await fetch("http://localhost:3000/findProducts");
    let result = await response.json();
    console.log(result);   
    
    // for(let i =0;i<result.products.length;i++){
    //     let data = result.products[i];
    //     let divTag = document.createElement("div");
    //     let divTagContent = document.createTextNode(data.title)
    //     divTag.appendChild(divTagContent);  
    //         let imageTag = document.createElement("img")
    //         imageTag.setAttribute("src",data.thumbnail);
    //         imageTag.setAttribute("width","100px")
    //         imageTag.setAttribute("height","100px") 
    //     divTag.appendChild(imageTag)
    // document.getElementsByTagName("body")[0].appendChild(divTag);
   // }
     
}
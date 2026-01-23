let products = [];
let p1 = {"pid":101,"pname":"TV","price":55000.50};
let p2 = {"pid":100,"pname":"Computer","price":36000.75};
let p3 = {"pid":102,"pname":"Laptop","price":95000.25};
products.push(p1);
products.push(p2);
products.push(p3);
console.log("display product details one by one - Before sort")
products.forEach(p=>console.log(p))

console.log("sort by pid - asc order")
products.sort((product1,product2)=>product1.pid-product2.pid)
products.forEach(p=>console.log(p))
console.log("sort by pid - desc order")
products.sort((product1,product2)=>product2.pid-product1.pid)
products.forEach(p=>console.log(p))

console.log("sort by pname - asc order")
products.sort((product1,product2)=>product1.pname.toLowerCase().localeCompare(product2.pname.toLowerCase()))
products.forEach(p=>console.log(p))
console.log("sort by pname - desc order")
products.sort((product1,product2)=>product2.pname.toLowerCase().localeCompare(product1.pname.toLowerCase()))
products.forEach(p=>console.log(p))

console.log("sort by price - asc order")
products.sort((product1,product2)=>product1.price-product2.price)
products.forEach(p=>console.log(p))
console.log("sort by price - desc order")
products.sort((product1,product2)=>product2.price-product1.price)
products.forEach(p=>console.log(p))

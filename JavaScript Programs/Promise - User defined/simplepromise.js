// ES5 style promise object creation 

// let obj1 = new Promise(function(resolved,rejected){
//    // rejected(new Error("Error Generated with some reason")),
//     resolved("Successfully done")
    
// })

// // ES5 style to handle the promise 
//     obj1.then(result=>console.log("Promise resolved "+result)).catch(error=>console.log("Error generate"+error))
// console.log("Statement1")
// console.log("Statement2")
// console.log("Statement3")

// ES6 style promise object creation 

//let obj2 = new Promise((resolved,rejected)=>resolved("successfully done"));
let obj2 = new Promise((resolved,rejected)=>rejected("error generated "));
async function handlePromise(){
    console.log("Hello")
    try{
    let result = await obj2;        // it is replacement of then
    console.log(result)
    }catch(error){
        console.log(error)
    }
}
handlePromise();


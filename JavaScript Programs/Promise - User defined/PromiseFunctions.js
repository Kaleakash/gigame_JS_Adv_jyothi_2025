// promise functions 

// promise with resolve 

// let promise = Promise.resolve({state:"success","msg":"Successfully done"});
// promise.then(result=>console.log(result));

//  promise with rejected 
// let promise = Promise.reject({state:"failure","msg":"Promise rejected"});
// promise.then(result=>console.log(result)).catch(error=>console.log(error))

// promise with all functions 
//let obj = {state:"success","msg":"1st promise Successfully done"};
//let p1 = Promise.resolve(()=>setTimeout(()=>obj,500));
//let p1 = Promise.resolve({state:"success","msg":"1st promise Successfully done"})
//let p2 = Promise.resolve({state:"success","msg":"2nd promise Successfully done"})
//let p3 = Promise.resolve({state:"failure","msg":"1st promise rejected"})

//Promise.all([p3,p1,p2]).then(result=>console.log(result)).catch(error=>console.log(error))
//Promise.any([p1,p2,p3]).then(result=>console.log(result)).catch(error=>console.log(error))

//console.log("normal1 Statement")
//console.log("normal2 Statement")
//console.log("normal3 Statement")

// promise with race 
let p1 = new Promise((resolve,rejected)=>setTimeout(resolve,1500,"promise successfully done"));
let p2 = new Promise((resolve,rejected)=>setTimeout(rejected,2500,"promise rejected"));

//Promise.race([p1,p2]).then(result=>console.log(result)).catch(error=>console.log(error))
//Promise.all([p1,p2]).then(result=>console.log(result)).catch(error=>console.log(error))
//Promise.any([p1,p2]).then(result=>console.log(result)).catch(error=>console.log(error))
//Promise.allSettled([p1,p2]).then(result=>console.log(result)).catch(error=>console.log(error))



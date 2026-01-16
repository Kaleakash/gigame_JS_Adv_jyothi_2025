//let num1 = [3,1,6,8,9,7,4,5];
let num1 = [30,1,25,62,8,97,7,43,50,90];
console.log("before sort")
console.log(num1);
//num1.sort();    
num1.sort((a,b)=>a-b);      // return can be +Ve or -ve or 0
console.log("After sort - Asc")
console.log(num1)
num1.sort((a,b)=>b-a);      // return can be +Ve or -ve or 0
console.log("After sort - Desc")
console.log(num1)
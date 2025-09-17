display1();
// normal style function 
function display1() {
    document.writeln("This is normal style function<br>");
}

display1();

//display2();
// expression style function
let display2 = function () {
    document.writeln("This is expression style function<br>");
}
display2();

// arrow function 
let display3 = ()=>document.writeln("This is arrow function<br>");
display3();

// addition of two numbers using expression style 
let add1 = function(a,b){
    var sum = a+b;
    return sum;
}
document.writeln("Addition of two numbers using expression style function: "+add1(10,20)+"<br>");
// addition of two numbers using arrow function. it return value without return keyword
let add2 = (a,b)=>a+b;
document.writeln("Addition of two numbers using arrow function: "+add2(30,40)+"<br>");

// callback function 
function greeting(fname,callback){
    return "Welcome "+callback(fname);
}
let maleInfo = function(fname){
    return "Mr "+fname;
} 
let femaleInfo = (fname)=>"Miss "+fname;

document.writeln(greeting("John",maleInfo)+"<br>");
document.writeln(greeting("Mary",femaleInfo)+"<br>"); 
document.writeln(greeting("Smith",function(fname){
    return "Dr "+fname;
})+"<br>");
document.writeln(greeting("Sara",(fname)=>"Mrs "+fname)+"<br>");
// IIFE function
(function() {
    document.writeln("This is IIFE function<br>");
})();
// IIFE function with parameters
((a,b)=>document.writeln("Sum is "+(a+b)))(10,20)

// Higher order function :
function applyOperation(a,b,operation){
    return operation(a,b);
}
let sum = (a,b)=>a+b;
document.writeln("<br/>Sum is : "+applyOperation(100,200,sum)+"<br>");
let multiply = (a,b)=>a*b;
document.writeln("Multiplication is : "+applyOperation(10,20,multiply)+"<br>");
document.writeln("Subtraction is : "+applyOperation(50,20,(a,b)=>a-b)+"<br>");
// generator function 
function *generateNumbers(){
    console.log("Generator function started");
    yield 1;
    console.log("Yielded 1");
    yield 2;
    console.log("Yielded 2");
    yield 3;
    console.log("Yielded 3");
}
let generator = generateNumbers();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
//console.log(generator.next().value); // done true
console.log("Generator function ended");
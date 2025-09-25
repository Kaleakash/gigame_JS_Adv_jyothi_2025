// function greeting(msg,greetMsg){
//     document.writeln(msg+", Welcome "+this.name+" Your age is "+this.age+" "+greetMsg)
// }

// let emp1 = {name:"Raj",age:21}

//greeting.call(emp1,"Hello","How r you")
//greeting.call(emp1,"Hi","hello")
//greeting.apply(emp1,["Hi","Hello"])

// function greet(msg,greetMsg){
//     document.writeln(msg+", Welcome "+this.name+" Your age is "+this.age+" "+greetMsg)
// }
// let emp1 = {name:"Raj",age:21}
// const greetingMsg = greet.bind(emp1,"Hello","How r you");
// greetingMsg()


// bind is use to achieve partial function functionality 

function mul(a,b,c){
    return a*b*c;
}

let double  =   mul.bind(null,2);   // a value is fix and b value dynamic 
let output = double(5,2);
alert(output)
let output1 = double(10,2);
alert(output1)
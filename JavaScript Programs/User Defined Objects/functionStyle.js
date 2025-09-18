function Employee() {
    this.id = 100;  // this is keyword which refer to current object instance variable 
    this.fname = "Jyothi";
    this.lname = "Kumari";
    let n = 100;        // local variable or private variable
    var m = 200;
    this.display = function () {
        document.writeln("Id: " + this.id + "<br>");
        document.writeln("First Name: " + this.fname + "<br>");
        document.writeln("Last Name: " + this.lname + "<br>");
        document.writeln("Local variable n: " + n + "<br>");
        document.writeln("Local variable m: " + m + "<br>");
    }
}
//Employee(); // it consider as normal function call
let emp1 = new Employee(); // it consider as constructor function call
document.writeln(emp1.id + "<br>");
document.writeln(emp1.fname + "<br>");
document.writeln(emp1.lname + "<br>");
document.writeln(emp1.m + "<br>");  // undefined because m is local variable
document.writeln(emp1.n + "<br>");
document.writeln("<hr>");
emp1.display();
Employee.prototype.hello= function(){       // we adding new method or function to existing object
    alert("Hello Everyone");
}
emp1.hello();
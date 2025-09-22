// ES6 class style inheritance 
// class Employee {
//     displayEmp() {
//         console.log("Employee function")
//     }
// }
// class Manager extends Employee{
//     displayMgr() {
//         console.log("Manager function")
//     }
// }
// let emp1 = new Employee();
// emp1.displayEmp();
// let mgr1 = new Manager();
// mgr1.displayEmp();
// mgr1.displayMgr();


// ES6 inheritance with constructor 
// class Employee {
//     constructor(id,name,salary) {
//         console.log("Employee class object created")
//         this.id = id;
//         this.name = name;
//         this.salary = salary;
//     }
//     displayEmp() {
//         console.log("Employee function")
//         console.log("id is "+this.id+" name is "+this.name+" salary is "+this.salary)
//     }
// }
// class Manager extends Employee{
//     constructor(id,name,salary,numberOfEmp) {
//         super(id,name,salary);        // it will super class empty constructor 
//         console.log("Manager class object created")
//         this.numberOfEmp=numberOfEmp;
//     }
//     displayMgr() {
//         console.log("Manager function")
//         console.log("number of employee working "+this.numberOfEmp);
//     }
// }

// let emp1 = new Employee(100,"Ravi",45000);
// emp1.displayEmp();
// let mgr1 = new Manager(101,"Raju",57000,5);
// mgr1.displayEmp();
// mgr1.displayMgr();


// ES5 function style inheritance 
// function Employee() {
//     this.displayEmp= function() {
//         console.log("Employee object function")
//     }
// }
// function Manager() {
//     this.displayMgr= function() {
//         console.log("Manger object function")
//     }
// }
// let emp1 = new Employee();
// emp1.displayEmp();

// //Manager.prototype=emp1; // Employee object inherits to Manager object. 
// Manager.prototype= new Employee();

// let mgr1 = new Manager();
// mgr1.displayEmp();
// mgr1.displayMgr();


// ES5 style inheritance with property 

function Employee(id,name,salary) {
    this.id=id;
    this.name=name;
    this.salary=salary;
    this.displayEmp= function() {
        console.log("id is "+id+" name is "+name+" Salary is "+salary)
    }
}
function Manager(id,name,salary,numberOfEmp) {
    Employee.call(this,id,name,salary); // passing the value or calling Employee object to set the value
   // Employee.apply(this,arguments);
    //Employee.apply(this,[id,name,salary])
    this.numberOfEmp=numberOfEmp;
    this.displayMgr= function() {
        console.log("Number of Employee working "+this.numberOfEmp)
    }
}
let emp1 = new Employee(100,"Ravi",45000)
emp1.displayEmp();
let mgr1  = new Manager(101,"Raju",57000,5);
mgr1.displayEmp();
mgr1.displayMgr();
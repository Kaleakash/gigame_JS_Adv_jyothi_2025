function Person(name,age){
    this.name=name;
    this.age=age;
}
//Person();
let p1 = new Person("Raj",24);
let p2 = new Person("Ravi",25);
    Person.prototype.city = "Bangalore";    // adding new property to the prototype
    Person.prototype.displayInfo = function(){   // adding new method to the prototype
        console.log(this.name+" "+this.age+" "+this.city);
    }
p1.city = "Mumbai";   // adding new property to the object p1
p1.displayInfo();
p2.displayInfo();


function Employee(name,salary){
    this.name = name;
    this.salary = salary;
}
let emp1  = new Employee("Mohan",25000);

let mgr1 = Object.create(emp1);  // creating object using Object.create() method
console.log(emp1.name+" "+emp1.salary);
console.log(mgr1.name+" "+mgr1.salary);
mgr1.name = "Sohan";
mgr1.salary = 35000;
console.log("After updating the properties of mgr1");
console.log(mgr1.name+" "+mgr1.salary);
    console.log(emp1.name+" "+emp1.salary);
console.log(mgr1.__proto__ === emp1);   // true

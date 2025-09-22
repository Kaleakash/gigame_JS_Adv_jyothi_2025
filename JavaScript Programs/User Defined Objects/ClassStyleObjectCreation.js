// class Car {
//     wheel = 4
//     price = 1000000;
//     colour = "White";       // instance property 

//     display() {
//         document.writeln("Wheel: " + this.wheel + "<br>");
//         document.writeln("Price: " + this.price + "<br>");
//         document.writeln("Colour: " + this.colour + "<br>");    
//     }
// }

// let santro  = new Car();
// let innova = new Car();
// santro.display();
// innova.display();

// Example of constructor 
// class Car {
//     constructor() {
//         console.log("Constructor called");
//     }
//     display() {
//         console.log("Display method called");
//     }
// }
// let santro = new Car(); // it will call constructor


// parameterized constructor 

class Car {
    wheel;
    price;
    color;
    constructor(wheel=4,price=1000000,color="Black") {
        console.log("Constructor called");
        this.wheel = wheel;
        this.color = color
        this.price = price;
     }
    // constructor(wheel,price) {
    //     this.wheel = wheel;
    //     this.price = price;
    // }
    display(car_name) {
        console.log("Car details "+car_name);
        console.log("wheel "+this.wheel);
        console.log("price "+this.price);
        console.log("color "+this.color);
    }
}
let santro = new Car(4,1200000,"White")
let innova= new Car(4,3500000,"Gray")
let ertiga = new Car(4,1600000)
santro.display("Santro");
innova.display("Innova");
ertiga.display("Ertiga");
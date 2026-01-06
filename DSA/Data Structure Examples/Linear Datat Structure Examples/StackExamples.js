class Stack {
    constructor() {
        this.data = [];     // empty array to hold stack elements 
        this.MAX_SIZE = 5; // maximum size of the stack
    }
    push(value){
        if(this.data.length >= this.MAX_SIZE){
            console.log("Stack Overflow: Cannot push, stack is full");
            return;
        }
        this.data.push(value); // add value to the top of the stack
        console.log(`Pushed ${value} to stack`);
    }
    size(){
        return this.data.length; // return current size of the stack
    }
    pop() {
        if(this.data.length === 0){
            console.log("Stack Underflow: Cannot pop, stack is empty");
            return null;
        }
        return this.data.pop(); // remove and return the top element
    }
    peek() {
        if(this.data.length === 0){
            console.log("Stack Underflow: Cannot pop, stack is empty");
            return null;
        }
        return this.data[this.data.length - 1]; // return the top element without removing it
    }
    isEmpty() {
        return this.data.length === 0; // check if stack is empty
    }
}

let ss = new Stack();
console.log(ss.isEmpty()); // Output: true
console.log(ss.size()); // Output: 0
console.log(ss.pop());  // Output: Stack Underflow: Cannot pop, stack is empty
ss.push(10);          // Output: Pushed 10 to stack
ss.push(20);
ss.push(30);
ss.push(40);
ss.push(50);
ss.push(60);
console.log(ss.pop()); // Output: 50
console.log(ss.pop()); // Output: 40
console.log("Size of the stack is: " + ss.size()); // Output: 30
console.log(ss.peek()); // Output: 30
console.log("Size of the stack is: " + ss.size()); // Output: 3
console.log(ss.isEmpty()); // Output: false
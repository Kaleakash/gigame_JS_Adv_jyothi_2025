class Queue {
    constructor() {
        this.queue = [];
    }
    // Add an element to the end of the queue
    enqueue(element) {
        this.queue.push(element);
    }
    // remove the elements from the front of the queue
    dequeue() {
        if(this.isEmpty()){
            console.log("Queue Underflow: Cannot dequeue, queue is empty");
            return null;
        }
        return this.queue.shift();   // remove and return the front element
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    // return the front element without removing it
    peek() {
        if(this.isEmpty()){
            console.log("Queue Underflow: Cannot dequeue, queue is empty");
            return null;
        }
        return this.queue[0]; // return the front element without removing it
    }
    // check the size of the queue
    size() {
        return this.queue.length;
    }
}
let queue = new Queue();
console.log(queue.isEmpty()); // Output: true
console.log("Size of the queue is: " + queue.size()); // Output: 0
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.isEmpty()); // Output: false
console.log("Size of the queue is: " + queue.size()); // Output: 3
console.log("Front element is: " + queue.peek()); // Output: 10
console.log("Size of the queue is: " + queue.size());
console.log("Dequeue " + queue.dequeue()); // Output: 10
console.log("Dequeue " + queue.dequeue()); // Output: 20
console.log("Dequeue " + queue.dequeue()); // Output: 30
console.log("Dequeue " + queue.dequeue()); // error or exception 
console.log(queue.isEmpty()); // Output: true
console.log("Size of the queue is: " + queue.size()); // Output: 3
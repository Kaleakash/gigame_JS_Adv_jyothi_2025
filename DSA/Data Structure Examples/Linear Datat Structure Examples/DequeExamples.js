class Deque  {
    constructor(){
        this.data = [];
    }
    // insert element at the front
    insertFront(element){
        this.data.unshift(element);     // add the element from the front
    }
    // insert element at the rear
    insertRear(element){
        this.data.push(element);        // add the element from the rear
    }
    // to check the data is empty or not 
    isEmpty() {
        return this.data.length === 0;
    }
    // remove element from the front
    removeFront() {
        if (this.isEmpty()) {
            return "Deque is empty";
        }
        return this.data.shift();
    }
    // remove element from the rear
    removeRear() {
        if (this.isEmpty()) {
            return "Deque is empty";
        }
        return this.data.pop();
    }   
    // get the size of the deque
    size() {
        return this.data.length;
    }
    // get the front element
    peekFront() {
        if (this.isEmpty()) {
            return "Deque is empty";
        }
        return this.data[0];
    }
    // get the rear element
    peekRear() {
        if (this.isEmpty()) {
            return "Deque is empty";
        }
        return this.data[this.data.length - 1];
    }   
}

let deque = new Deque();
console.log(deque.isEmpty());
console.log(deque.size());
deque.insertRear(10);
deque.insertRear(20);
deque.insertFront(5);       
                    // deque: [5, 10, 20]
console.log(deque);   // display the deque data as string format. 
console.log(deque.peekFront());
console.log(deque.peekRear());
deque.removeFront();    // removes 5
deque.removeRear();     // removes 20
console.log(deque);     // deque: [10]
deque.removeFront();    // removes 10
console.log(deque.isEmpty());
//deque.removeFront();    // Deque is empty
console.log(deque.removeRear());     // Deque is empty
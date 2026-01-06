class CustomerSupportQueue {
    constructor() {
        this.queue = [];
    }
    enqueue(request){
        this.queue.push(request);
        console.log(`Support request from ${request} added to the queue.`);
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("No support requests in the queue.");
            return null;
        }
        let request = this.queue.shift();
        console.log(`Processing support request from ${request}.`);
        return request;
    }
    isEmpty(){
        return this.queue.length === 0;
    }
    peek() {
        return this.isEmpty() ? "No pending requests" : this.queue[0];
    }
}

let supportQueue = new CustomerSupportQueue();
console.log("Is the support queue empty?", supportQueue.isEmpty());
console.log("Solve the following support requests:"+supportQueue.dequeue());
console.log("Adding support requests to the queue:");
supportQueue.enqueue("");
supportQueue.enqueue("Customer B - Account Locked");
supportQueue.enqueue("Customer C - Billing Inquiry");
    console.log("check the pending requests:"+supportQueue.peek())
console.log("Solve the following support requests:"+supportQueue.dequeue())
console.log("Solve the following support requests:"+supportQueue.dequeue())
console.log("Solve the following support requests:"+supportQueue.dequeue())
console.log("Solve the following support requests:"+supportQueue.dequeue())
console.log("check the pending requests:"+supportQueue.peek())
console.log("Is the support queue empty?", supportQueue.isEmpty());
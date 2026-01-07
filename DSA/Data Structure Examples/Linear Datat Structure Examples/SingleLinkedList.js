class Node {
    constructor(value){
        console.log("Node created with value:", value);
        this.value = value;
        this.next = null;
    }
}
class SingleLinkedList{
    constructor(){
        console.log("Single Linked List created");
        this.head = null;
    }
    // insert at the end
    append(value){
        let newNode = new Node(value);  // 3 node created 
        if(!this.head){
            console.log("List is empty, adding the first node");
            this.head = newNode;  // head -> 10
            return;
        }
        let current = this.head;  // current -> 10
        while(current.next){
            console.log("Traversing node with value:", current.value);
            current = current.next;  // current -> 20
        }
        current.next = newNode;
    }
    printList(){
        let current = this.head;
        let output = "";
        while(current){
            output +=current.value + " -> ";
            current = current.next;
        }
        console.log(output + "null");
    }
    // delete a node by value
    delete(value){
        if(!this.head){
            console.log("List is empty");
            return;
        }
        if(this.head.value === value){
            console.log("Deleting the head node with value:", value+" ie is head node");
            this.head = this.head.next;
            console.log("Node deleted with value:", value);
            return;
        }
        let current = this.head;
        while(current.next && current.next.value !== value){
            current = current.next;
        }
        if(current.next){
            current.next = current.next.next;
            console.log("Node deleted with value:", value);
        } else {
            console.log("Node with value", value, "not found");
        }
    }
}
let list = new SingleLinkedList();
list.delete(10);
list.append(10);        // head node 
list.append(20); 
list.append(30);       
list.delete(30);

// list.append(30);
// list.append(40);
// list.append(50);
// console.log("Final Linked List:");
// console.log(list)
// list.printList();
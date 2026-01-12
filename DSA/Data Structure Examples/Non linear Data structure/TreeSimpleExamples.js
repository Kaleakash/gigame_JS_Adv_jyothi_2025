class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null
    }
    // insert the node 
    insert(value) {
        let newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
        }else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode) {
        if(newNode.value < node.value) {
            if(node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if(node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
}

let tree = new BinaryTree();
tree.insert(100);
tree.insert(80);
tree.insert(120);
tree.insert(70);
tree.insert(90);
tree.insert(110);
tree.insert(130);
console.log(tree);
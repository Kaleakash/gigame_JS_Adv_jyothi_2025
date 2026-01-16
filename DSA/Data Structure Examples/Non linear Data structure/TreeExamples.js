class TreeNode {
    constructor(value){
        this.value = value;
        this.children = [];
    }
}

class Tree {
    constructor(value){
        this.root = new TreeNode(value);
    }
    // add Child Nodes 
    addChild(parentValue,ChildValue){
        let parent = this.findNode(this.root,parentValue);
        if(parent){
            parent.children.push(new TreeNode(ChildValue))
        }
    }
    // find Node it is parent node or child node 
    findNode(node,value){
        if(!node) return null;
        if(node.value==value) return node;
        for(let child of node.children){
            let found = this.findNode(child,value);
            if(found) return found;
        }
        return null;
    }
    
    bsf() {
        let queue = [this.root];
        while(queue.length){
            let node = queue.shift();
            console.log(node.value+" ");
            queue.push(...node.children);
        }
    }

    dfs(node = this.root) {
        console.log(node.value);
        node.children.forEach(child=>this.dfs(child));
    }
    // count total nodes 
    countNodes(node = this.root){
        return 1+node.children.reduce((sum,child)=>sum+this.countNodes(child),0);
    }
    // count leaf nodes nodes without children.
    countLeaves(node = this.root){
        if(node.children.length==0) return 1;
        return node.children.reduce((sum,child)=>sum+this.countLeaves(child),0);
    }    
}
// let root = new Tree("Root");
// console.log(root)
// root.addChild("Root","Child1");
// root.addChild("Root","Child2");
// root.addChild("Root","Child3");
//     root.addChild("Child1","Child4")
//     root.addChild("Child1","Child5")
//     root.addChild("Child5","Child6")

//     root.addChild("Child2","Child7");
//     root.addChild("Child2","Child8");

//     root.addChild("Child3","Child9");


// console.log(root)
// console.log("-----------------")
// root.bsf();

// console.log("---------------")
// root.dfs();

// console.log("-----------------")
// console.log("Count total nodes "+root.countNodes())
// console.log("-----------------")
// console.log("Count leaves nodes "+root.countLeaves())

let tree = new Tree("CEO");
tree.addChild("CEO","CTO");
tree.addChild("CEO","CFO");
tree.addChild("CEO","HR")

tree.addChild("CTO","Dev Manager");
tree.addChild("Dev Manager","Developer");

tree.addChild("Dev Manager","Tester");

tree.addChild("HR","Recruiter");

tree.dfs();
console.log("----------------")
tree.bsf();
console.log("Total number of employees "+tree.countNodes())
console.log("Display total number of employee not a manager "+tree.countLeaves())

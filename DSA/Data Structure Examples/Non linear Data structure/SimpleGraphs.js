class Graph {
    constructor() {
        this.adjacencyList = {};    // type of object 
    }
    // add Vertex or node 
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];// type of array 
            console.log("Vertex added "+vertex);
        }else {
            console.log("Vertex already exists");
        }
    }
    // add edge or connection between two vertices
    addVertexEdge(v1, v2) {
        if(this.adjacencyList[v1] && this.adjacencyList[v2]) {
            console.log("Edge added between "+v1+" and "+v2);
            this.adjacencyList[v1].push(v2);    // A --->B
            this.adjacencyList[v2].push(v1);    // B --->A
            
        }else {
            console.log("One or both vertices do not exist");
        }
    }
    // print graph
    printGraph() {
        for(let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + this.adjacencyList[vertex].join(", "));
        }
    }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertexEdge("A", "B");
g.addVertexEdge("A", "B");
g.addVertexEdge("A", "C");
g.addVertexEdge("A", "D");
g.printGraph();
//g.addVertexEdge("A", "E");
//g.addVertexEdge("F", "C");
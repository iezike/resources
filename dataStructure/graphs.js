class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
    }
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacencyVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(adjacencyVertex, vertex);
    }
    delete this.adjacencyList[vertex];
  }
  depthFirstRecursive(start) {
    const nodeList = [];
    const visitedNodes = {};
    const adjacencyList = this.adjacencyList;

    function helper(vertex) {
      if (!vertex) return null;
      nodeList.push(vertex);
      visitedNodes[vertex] = true;
      for (let node of adjacencyList[vertex]) {
        if (!visitedNodes[node]) {
          helper(node);
        }
      }
    }

    helper(start);
    return nodeList;
  }

  depthFirstIterative(vertex) {
    const result = [];
    let stack = [];
    const visitedNodes = {};

    stack.push(vertex);
    visitedNodes[vertex] = true;

    while (stack.length) {
      let currentvertex = stack.pop();
      result.push(currentvertex);
      for (let neighbor of this.adjacencyList[currentvertex]) {
        if (!visitedNodes[neighbor]) {
          stack.push(neighbor);
          visitedNodes[neighbor] = true;
        }
      }
    }

    return result;
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.depthFirstRecursive("A"));
console.log(g.depthFirstIterative("A"));

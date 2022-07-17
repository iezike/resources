class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}

const g = new Graph()
g.addVertex("Tokyo");
g.adjacencyList.Tokyo.push("Something")
console.log(g.adjacencyList)
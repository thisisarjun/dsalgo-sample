
class Graph{
  constructor(){
    this.adjacencyList = {};
  }

  addVertex(vertexName){
    if(!this.adjacencyList[vertexName]){
      this.adjacencyList[vertexName] = [];
    }
  }

  addEdge(v1, v2, w){
    this.adjacencyList[v1].push({node: v2, weight: w});
    this.adjacencyList[v2].push({node: v1, weight: w});
  }
}
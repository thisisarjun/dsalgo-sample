class PriorityQue{
  constructor(){
    this.values = [];
  }

  enque(val, priority){
    this.values.push({val, priority});
    this.sort();
  }

  deque(){
    return this.values.shift();    
  }

  sort(){
    this.values.sort((a, b) => a.priority - b.priority)
  }

}

class WeightedGraph{
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

  Djikstra(start, end){

    let pque = new PriorityQue();
    let distances = {}, previous = {};
    for(let i in this.adjacencyList){ //  initializing DS's
      
      if(i === start){
        distances[i] = 0;  
        pque.enque(i, 0);
      }else{
        distances[i] = Infinity;
        pque.enque(i, Infinity);

      }
      previous[i] = null;      
    }

    let path = [];
    while(pque.values.length !== 0){
      let currentNode = pque.deque();
      // console.log('currentNode :>> ', currentNode);
      let currvertex = currentNode.val;
      let currDistance = currentNode.priority; 
      if(currvertex === end){ // end
        // build up path
        let i = end;
        while(i){
          path.push(i);
          i = previous[i];
        }        
        break;
      }
      if(this.adjacencyList[currvertex].length && currDistance !== Infinity){
        let neighbours = this.adjacencyList[currvertex];
        for(let neigh of neighbours){
          let newDist = distances[currvertex] + neigh.weight;
          if(newDist < distances[neigh.node]){
            distances[neigh.node] = newDist;
            previous[neigh.node] = currvertex;
            pque.enque(neigh.node, newDist);
          }
        }
      }
    }

    return path.reverse();
  }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

let op = graph.Djikstra("A", "E");
console.log('op :>> ', op);
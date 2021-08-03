class Graph{
  constructor(){
    this.adjacencyList = {};    
  }

  addVertex(vertexName){
    if(!this.adjacencyList[vertexName]){
      this.adjacencyList[vertexName] = [];
    }
  }

  addEdge(v1, v2){
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2){
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v!== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v!== v1);    
  }

  removeVertex(v1){
    this.adjacencyList[v1].forEach(v => {
      this.removeEdge(v, v1);
    });
    delete this.adjacencyList[v1];
  }

  dfs(source){
    let visited = new Map();
    let result = [];
    if(!this.adjacencyList[source]){
      return null;
    }    
    visited.set(source, true);
    // recursive call for DFS
    function helper(vertex){
      let arr = this.adjacencyList[vertex];
      for(let v of arr){
        if(!visited.get(v)){
          visited.set(v, true);
          result.push(v);
          helper(v);
        }
      }
    }
    helper.bind(this)(source);
    return result;
  }

  dfsArray(source){
    let visited = new Map();
    let result = [];
    let stk = [source];
    visited.set(source, true);
    while(stk.length){
      let cur = stk.pop();
      result.push(cur);
      let neighbours = this.adjacencyList[cur];
      neighbours.forEach((val) => {
        if(!visited.get(val)){
          visited.set(val, true);
          stk.push(val);
        }
      });
    }
    return result;
  }

  bfs(source){
    let visited = new Map();
    let result = [];
    let que = [source];
    visited.set(source, true);
    while(que.length){
      let curr = que.shift();
      result.push(curr);
      let neighbours = this.adjacencyList[curr];
      neighbours.forEach((val) => {
        if(!visited.get(val)){
          visited.set(val, true);
          que.push(val);
        }
      })
    }
    return result;
  }
}
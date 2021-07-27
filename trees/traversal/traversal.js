class Node {
  constructor(val){
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

class BST {
  constructor(){
    this.root = null;
  }
  insert(value){
    let newNode = new Node(value);
    if(!this.root){
      this.root = newNode;
      return this;
    }

    let pointer = this.root;
    while(pointer !== null){      
      if(value === pointer.val){ // duplicate
        return null;
      }
      if(value < pointer.val){
        if(!pointer.left){
          pointer.left = newNode;
          return this;
        }else{
          pointer = pointer.left;
        }
      }else{
        if(!pointer.right){
          pointer.right = newNode;
          return this;
        }else{
          pointer = pointer.right;
        }
      }      
    }
    return this;
  }  

  traverseBFS(){
    if(!this.root){
      return null;
    }
    let queue = [this.root], visited = [], current;

    while(queue.length !== 0){
      current = queue.shift();
      visited.push(current.val);
      if(current.left){
        queue.push(current.left);
      }
      if(current.right){
        queue.push(current.right);
      }
    }
    return visited;
  }

  traverseDFSPreOrder(){
    if(!this.root){
      return null;
    }
    let visited = [];
    let current = this.root;
    function helper(pointer){
      visited.push(pointer.val);
      if(pointer.left){
        helper(pointer.left);
      }
      if(pointer.right){
        helper(pointer.right);
      }      
    }

    helper(current);
    return visited;
  }

  traverseDFSPostOrder(){
    if(!this.root){
      return null;
    }
    let visited = [];
    let current = this.root;
    function helper(pointer){
      if(pointer.left){
        helper(pointer.left);
      }
      if(pointer.right){
        helper(pointer.right);
      }      
      visited.push(pointer.val);
    }

    helper(current);
    return visited;
  }

  traverseDFSInOrder(){
    if(!this.root){
      return null;
    }
    let visited = [];
    let current = this.root;
    function helper(pointer){
      if(pointer.left){
        helper(pointer.left);
      }
      visited.push(pointer.val);
      if(pointer.right){
        helper(pointer.right);
      }      
    }

    helper(current);
    return visited;
  }
  
}


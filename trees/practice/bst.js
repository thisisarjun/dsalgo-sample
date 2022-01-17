class Node {
  constructor(val){
    this.left = null;
    this.right = null;
    this.val = val;
  }
}


class BST {

  constructor(val){
    this.root = new Node(val);
  }

  insert(value){
    let newNode = new Node(value);
    if(!this.root){
      this.root = newNode;
      return;
    }
    
    let ptr = this.root;
    while(ptr){
      if(value < ptr.val){
        if(!ptr.left){
          ptr.left = newNode;
        }
        ptr = ptr.left;
        
      }else{
        if(!ptr.right){
          ptr.right = newNode;
        }
        ptr = ptr.right;
        
      }
    }    
  }

  dfsTraversal(){
    let visited = [];
    function helper(ptr){
      if(!ptr){
        return;
      }
      visited.push(ptr.val);
      helper(ptr.left);
      helper(ptr.right);
    }
    helper(this.root);
    return visited;
  }

  maxHeightTree(){
    
    let height = 0;
    function maxHeight(ptr){
      if(!ptr){
        return 0;
      }
      let ldepth = maxHeight(ptr.left);
      let rdepth = maxHeight(ptr.right);
      
      height = Math.max(ldepth, rdepth) + 1;
    }
    maxHeight(this.root);
    return height;
  }
}

let bst = new BST(10);
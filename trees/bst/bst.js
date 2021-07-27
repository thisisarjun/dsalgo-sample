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

  find(value){
    if(!this.root){
      return null;
    }
    let pointer = this.root;
    while(pointer !== null){
      if(value === pointer.val){
        return true;
      }
      if(value > pointer.val){
        pointer = pointer.right;
      }else{
        pointer = pointer.left;
      }
    }
    return false;
  }
}
class Node{
  constructor(val){
    this.val = val;
    this.next = null;    
  }
}

class Stack{

  constructor(){
    this.length = 0;
    this.first = null;
    this.last = null;
  }

  push(val){
    let newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;     
    }else{
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.length++;

  }

  pop(){
    if(this.length === 0){
      return null;
    }
    let val;
    val = this.first.val;
    if(this.first === this.last){
      this.first = null;
      this.last = null;
    }else{
      this.first = this.first.next;      
    }    
    this.length--;
    return val;

  }
}
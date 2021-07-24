class Node{
  constructor(val){
    this.val = val;
    this.next = null;    
  }
}

class Queue{

  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enque(val){
    let newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;      
    }else{
      this.last.next = newNode;
      this.last = this.last.next;
    }
    this.length++;
  }

  deque(){
    if(!this.length){
      return null;
    }

    let retVal = this.first.val;
    
    if(this.first === this.last){
      this.first = null;
      this.last = null;
    }else{
      this.first = this.first.next;
    }
    this.length--;
    return retVal;
  }
}
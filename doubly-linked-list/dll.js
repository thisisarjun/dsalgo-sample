class Node {
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{

  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  traverse(){
    let current = this.head, str = '';
    while(current != null){
      str+= ` ${current.val} => `;
      current = current.next;
    }
    return str;
  }

  Get(index){
    if(index < 0 || index >= this.length){
      return null;
    }

    let mid = Math.floor(this.length / 2) -1; 
    let i, current;   
    if(index <= mid){ // start from beginning to mid
      current = this.head, i = 0;
      while(i <= mid){
        if(index === i){
          return current.val;
        }
        current = current.next;
        i++;
      }
    }else{
      i = this.length - 1;
      current = this.tail;
      while(i > mid){
        if(index === i){
          return current.val;
        }
        current = current.prev;
        i--;
      }
    }
  }

  push(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;      
    }else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
}
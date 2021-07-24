class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val){
    let newNode = new Node(val);
    if(!this.head){ // first element
      this.head = newNode;
      this.tail = newNode;
    }else{ // push to the last element
      this.tail.next = newNode;
      this.tail = newNode;      
    }
    this.length += 1;
    return this;
  }

  pop(){
    let val;
    this.length--;
    if(!this.head){
      return -1;
    }
    if(this.head === this.tail){ // only 1 elemeent
      val = this.head.val;
      this.head = null;
      this.tail = null;      
    }else{ // multiple elements
      let temp = this.head;
      while(temp.next !== this.tail){
        temp = temp.next;
      }
      val = this.tail.val;
      this.tail = temp;
      this.tail.next = null;
    }
    return val;
  }

  shift(){
    if(!this.head){
      return -1;
    }    
    let val = this.head.val;
    if(this.head === this.tail){ // only 1 elemeent
      val = this.head.val;
      this.head = null;
      this.tail = null;      
    }else{
      this.head = this.head.next;
    }
    this.length--;
    return val;
  }

  unshift(val){
    let nnode = new Node(val);
    if(!this.head){ // empty;
      this.head = nnode;
      this.tail = nnnode;
    }else{
      nnode.next = this.head;
      this.head = nnode;
    }
    this.length++;
    return this;
  }

  get(index){
    if(!this.head){ // empty
      return null;
    }
    if(index<0 || index >= this.length){
      return null;
    }
    let i = 0;
    let temp = this.head, op = null;
    while(i < this.length){
      if(index === i){
        op = temp;
        break;
      }
      temp = temp.next;
      i++;
    }
    return op;
  }

  set(index, value){
    let foundNode = this.get(index);
    if(foundNode){
      foundNode.val = value;
      return true;
    }    
    return false;
  }

  insert(index, value){
    if(index<0 || index > this.length){
      return null;
    }
    let nNode = new Node(value);
    if(index === 0){// beginning | can use unshift
      nNode.next = this.head;
      this.head = nNode;
      this.length++;
      return true;
    }

    if(index === this.length){ //end | can use push
      this.tail.next = nNode;
      this.tail = nNode;
      this.length++;
      return true;
    }

    let i=1, temp = this.head.next, prevTemp = this.head;    
    while(i < this.length ){
      if(i === index){
        prevTemp.next = nNode;
        nNode.next = temp;
        break;        
      }
      prevTemp = prevTemp.next;
      temp = temp.next;
    }
    this.length++;
  }
  traverse(){
    let current = this.head;
    let str = '';
    while(current != null){
      str += `${current.val} -> `;
      current = current.next;
    };
    return str;
  }

  remove(index){
    if(!this.head){
      return null;
    }
    if(index < 0 || index >= this.length){
      return null;
    }
    let val;
    if(index === 0 ){ // first element
      return this.shift();
    }
    if(index === this.length - 1){ // last element
      return this.pop();
    }
    if(this.head === this.tail){ // 1 element
      return this.pop();
    }

    let prevTemp = this.head, nextTemp = this.head.next.next, i = 1;
    while(i < this.length - 1){
      if(i === index){
        val = prevTemp.next.val;
        prevTemp.next = nextTemp;
        this.length--;
        break;
      }
      prevTemp = prevTemp.next;
      nextTemp = nextTemp.next;
      i++;
    }
    return val;
  }

  reverse(){
    if(!this.head){
      return null;
    }
    if(this.head === this.tail){
      return this;
    }

    let prev = this.head;
    let current = prev.next;
    
    // swap head and ta
    
    while(current != null){      
      let c = current.next;      
      current.next = prev;
      prev = current;
      current = c      
    }

    // swap head and tail and make the prev head's next as null
    let t = this.head;
    this.head = this.tail;
    this.tail =t;
    this.tail.next = null;
    
    return this;
  }
}
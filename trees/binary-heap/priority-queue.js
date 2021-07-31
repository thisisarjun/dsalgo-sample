class Node{
  constructor(val, pri){
    this.value = val;
    this.priority = pri;
  }
}

class PQ{

  constructor(){
    this.values = [];
  }

  swap(arr, idx, idy){
    let t = arr[idx];
    arr[idx] = arr[idy];
    arr[idy] = t;
  }

  insert(node){
    this.values.push(node);
    if(this.values.length === 1){
      return this;
    }
    function bubbleUp(n){
      if(n<=0){
        return;
      }
      let parent = Math.floor( (n-1)/2 );
      console.log('parent :>> ', parent);
      if(this.values[parent].priority > this.values[n].priority){
        this.swap(this.values, parent, n);
        bubbleUp.bind(this)(parent);
      }
    }
    bubbleUp.bind(this)(this.values.length-1);
  }

  remove(){
    if(!this.values.length){ // if no element
      return null;
    }    
    this.swap(this.values, 0, this.values.length - 1);

    let remVal = this.values.pop();
    if(this.values.length <= 1){ // do nothing, because either it was last or second last
      return remVal;
    }

    function sinkDown(n){
      let lchild = this.values[2 * n + 1] ? this.values[2 * n + 1]  : {priority: Infinity};
      let rchild = this.values[2 * n + 2] ? this.values[2 * n + 2] : {priority: Infinity};
      let cValue, pridx;
      if(lchild.priority < rchild.priority){
        cValue = lchild.priority;
        pridx = 2*n+1;
      }else{
        cValue = rchild.priority;
        pridx = 2*n+2;
      }

      if(this.values[n].priority > cValue){
        this.swap(this.values, n, pridx);
        sinkDown.bind(this)(pridx);
      }
    }
    sinkDown.bind(this)(0);

  }
}
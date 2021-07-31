class BinaryHeap{
  constructor(){
    this.values = [];
  }

  insert(val){

    if(!this.values.length){
      this.values.push(val);
      return this;
    }

    this.values.push(val);

    function bubble(values, n){
      let parent = Math.floor(( n-1)/2 );
      if(parent >=0 && values[parent] < values[n]){        
        // bubble up
        let t =  values[parent];
        values[parent] = values[n];
        values[n] = t;
        bubble(values, parent);
      }      
    }
    bubble(this.values, this.values.length - 1);
    return this;
  }

  swap(arr, n1, n2){
    let t = arr[n1];
    arr[n1] = arr[n2];
    arr[n2] = t;    
  }

  remove(){
    if(!this.values.length){
     return null ;     
    }
    if(this.values.length === 0){
      this.values.pop();
    }
    // swap & remove last element
    console.log('before swap: ', this.values)
    this.swap(this.values, 0, this.values.length-1);    
    this.values.pop();
    console.log('this.values :>> ', this.values);

    function sinkDown(arr, n, swap){
      let lchild = arr[2*n+1] ? arr[2*n+1] : -99;
      let rchild = arr[2*n+2] ? arr[2*n+2] : -99;
      let childLargest = lchild > rchild ? 2*n+1 : 2*n+2;                  
      if( arr[childLargest] && arr[childLargest] > arr[n]){
        swap(arr, childLargest, n);
        sinkDown(arr, childLargest, swap);
    }}
    sinkDown(this.values, 0, this.swap);
    return this;
  }
}
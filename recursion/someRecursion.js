function someRecursive(arr, cb){  

  if(arr.length === 0) return false;
  
  if(cb(arr[0])){
    return true;
  }else{
    arr.splice(0,1)
    return someRecursive(arr, cb);
  }
}

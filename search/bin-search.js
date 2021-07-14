function binarySearch(arr, value){
  
  if(arr.length === 0){
    return -1;
  }
  if(arr.length === 1){
    if(arr[0] === value) return 0;
    return -1;
  }

  let start = 0, end = arr.length - 1, mid;
  while(start <= end){    
    mid = Math.floor(( start + end) / 2);    
    if(arr[mid] === value){
      return mid;
    }
    if(value > arr[mid]){
      start = mid + 1;
    }else {
      end = mid - 1;
    }    
  }
  return -1;
}
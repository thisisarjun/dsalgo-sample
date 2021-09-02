function findSmallest(arr, needle){
  
  let left = 0;
  let right = arr.length - 1;
  let smaller = -1;
  
  while(left <= right){
    let mid = Math.floor( (left + right) / 2);
    if(needle >= arr[mid]){
      left = mid + 1;
      smaller = mid;
    }else{
      right = mid - 1;
    }
  }
  return smaller + 1;
}
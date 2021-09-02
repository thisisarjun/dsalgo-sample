function findLargest(arr, needle){
  let left = 0;
  let right = arr.length - 1;
  let larger = arr.length;
  
  while(left <= right){
    let mid = Math.floor( (left + right)/ 2 );
    if(needle <= arr[mid]){
      larger = mid;
      right = mid - 1;
    }else{
      left = mid + 1;
    }
  }
  return arr.length - larger;
}
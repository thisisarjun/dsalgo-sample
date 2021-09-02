function binarySearch(arr, needle){
  let left = 0;
  let right = arr.length - 1;
  while(left <= right){
    let mid = Math.floor(( right + left) / 2);
    if(arr[mid] === needle){
      return mid;
    }
    if(needle < arr[mid]){
      right = mid - 1;
    }else{ // greater
      left = mid + 1;
    }    
  }
}

let arr = [1, 3, 4, 5, 7, 12, 13, 14, 16];
binarySearch(arr, 5)
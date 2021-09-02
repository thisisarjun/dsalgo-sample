function binarySearch(arr, needle){

  let start = 0;
  let end = arr.length - 1;
  let largeValues = end;
  while(start <= end){
    let mid = Math.floor( (start + end ) ) / 2;
    
    if(needle <= arr[mid]){
      largeValues = mid;
      end = mid - 1;
    }else{
      start = mid + 1;
    }
  }
  return largeValues;
}

let arr  = [2, 3, 5, 6, 9, 10, 11, 14];
let op = binarySearch(arr, 9);
console.log('op :>> ', op);
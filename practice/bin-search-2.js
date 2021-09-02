function binarySearch(arr, needle){

  let start = 0;
  let end = arr.length - 1;
  while(start <= end){
    let mid = Math.floor( (start + end) / 2);
    if(arr[mid] === needle){
      return mid;
    }else if (arr[mid] < needle){
      start = mid + 1;
    }else{
      end = mid - 1;
    }
  }
}
/* 
  i/p -> ordered array of integers | no duplicates
  o/p -> array of two elements that is equal to zero. else dont return anything

  using multple pointer approach
  [ 1, 0 , -1, 2]
   ^           ^
*/

function sumZero(arr){
  if(arr.length === 0){
    return;
  }
  let beg = 0, end = (arr.length - 1);
  while(beg < end){
    if(arr[beg] + arr[end] === 0){
      return [arr[beg], arr[end]]
    }
    if(arr[beg] < arr[end]){
      beg++;
      continue;
    }
    if(arr[beg] > arr[end]){
      end--;      
    }
  }
}
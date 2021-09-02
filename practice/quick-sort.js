function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function calculatePivot(arr, start, end){

  let pivot = arr[start];
  let swapIdx = start;
  for(let i = start + 1; i <= end; i++){
    if(arr[i] < pivot){
      swapIdx;
      swap(arr, i, swapIdx);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quick(arr, left = 0, right = arr.length - 1){

  if(left < right){
    let pivot = calculatePivot(arr, left, right);
    quick(arr, left, pivot-1);    
    quick(arr, pivot+1, right);    
  }
}
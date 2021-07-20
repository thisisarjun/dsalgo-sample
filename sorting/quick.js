function swap(arr, idx, idy){
  let temp = arr[idx];
  arr[idx] = arr[idy];
  arr[idy] = temp;
}

function pivotHelper(arr, startIndex = 0, endIndex = arr.length - 1){

  let swapIdx = startIndex;
  let pivot = arr[startIndex];
  for(let i =startIndex+1; i<= endIndex; i++){
    if(arr[i] < pivot){
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }
  swap(arr, startIndex, swapIdx)  
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length -1){

  if(left < right){
    // get pivot
    let pivot = pivotHelper(arr, left, right);
    // left
    quickSort(arr, 0, pivot-1);
    quickSort(arr, pivot+1, arr.length -1);
  }
  return arr;
}
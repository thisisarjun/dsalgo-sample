
function swap(arr, i , j){
  let temp = arr[i];
  arr[j] = arr[i];
  arr[i] = temp;
}

function sort(arr, left, right){
  let currPiv = left;
  let swapIdx = currPiv;
  for(let i = currPiv + 1; i < right; i++){
    if(arr[i] < currPiv){
      swap(arr, swapIdx, i);
      swapIdx++;
    }
  }
  swap(arr, swapIdx, currPiv);
  return swapIdx;
}

function quick(arr, left=0, right = arr.length-1){
  if(left < right){
    let pivot = sort(arr, left, right);
    quick(arr, left, pivot-1);
    quick(arr, pivot+1, right);
  }  
}


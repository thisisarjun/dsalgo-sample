function selectionSort(arr){

  let n = arr.length;
  let min;
  for(let i =0; i < n-1; i++){    
    min = arr[i];
    for(let j = i+1; j<n; j++){
      if(arr[j] < min){ // swap
        min = arr[j];
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}
function insertionSort(arr){
  // let i = 0;

  for(let i =0; i< arr.length; i++){
    let j = i-1, currVal = arr[i]; // else this value will be lost
    for(; j >= 0 && arr[j] > currVal; j--){              
      arr[j+1] = arr[j];
    }    
    arr[j+1] = currVal;
            
  }
  return arr; 
}
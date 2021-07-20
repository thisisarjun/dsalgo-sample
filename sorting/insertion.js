function insertionSort(arr){
  // let i = 0;
  let pivot = 0;
  for(let i =0; i< arr.length; i++){
    if(arr[i] < arr[pivot]){      
      let insPos = i;
      for(let j=pivot; j >= 0; j--){        
        if(arr[insPos] < arr[j]){                    
          let temp = arr[j];
          arr[j] = arr[insPos];
          arr[insPos] = temp;
          insPos = j;
        }
      }
      pivot++
    }else{
      pivot = i;
    }        
  }
  return arr; 
}
function bubbleSort(arr){

  let isSwp = false;
  for(i=arr.length-1; i > 0; i--){
    for(j=0;j <= i-1; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        isSwp = true; // optimization, if last iteration didnt have any swap, then its sorted
      }
    }
    if(!isSwp){
      break;
    }
  }
  return arr;
}
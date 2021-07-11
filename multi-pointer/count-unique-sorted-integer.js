function countUnique(arr){
  if(arr.length === 0 ){
    return 0;
  }
  if(arr.length === 1){
    return 1;
  }

  let i = 0;
  let j = 1;
  for(;j<arr.length; j++){
    if(arr[j] !== arr[i]){
      i+=1;
      arr[i] = arr[j];
    }
  }
  
  return i+1;

}
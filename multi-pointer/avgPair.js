/* 
  find a pair in a sorted array, whose average is equal to target
*/

function isAvgPairEqual(arr, target){
  if(arr.length === 0){
    return false;
  }  
  let i = 0, j = arr.length;
  let tempAvg;
  while(i < j){
    tempAvg = (arr[i] + arr[j]) / 2 
    if( tempAvg === target ){
      return true;
    }
    if(tempAvg < target){
      i++;
    }else{
      j--;
    }    
  }
  return false;
}
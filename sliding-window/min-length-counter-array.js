/* 
  min length array counter
  i/p -> 1 +ve integer array, 1 target( +ve integer)
  find the min length of consecutive sum >= target
*/

function minSubArrayLen(arr, target){

  if(arr.length === 1 && arr[0] >= target){
    return 1;
  }

  let i = 0, j = 1+1, counter =1,curSum=0, minCounter = 1;
  
  while(j < arr.length || i === arr.length -1){
    if(arr[i] >= arr.length){
      return 1;
    }
    curSum = arr[i] + arr[j];
    counter ++ ;
    if(curSum >= target){
      minCounter = counter;
      i = j + 1;
      j++;
    }else{      
      j++;      
    }
  }
  return minCounter;
}
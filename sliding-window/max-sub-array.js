/* 
  i/p -> array of ,  number
  calculate the largest sum of consecutive n number of elements
  o/p -> largest sum
*/

function maxSumSubArray(arr, n){
  
  let i = 0;
  let maxSum = 0;
  for(; i< n; i++){
    maxSum += arr[i];
  }

  i = 0;
  let j = n-1;
  let newSum = maxSum;
  while(j < arr.length - 1){    
    j+=1;
    newSum = (newSum + arr[j]) - arr[i];
    i+=1;
    if(newSum > maxSum) {
      maxSum = newSum;
    } 

  }
  return maxSum;
}

let op = maxSumSubArray([1,2,3,1,10,20,1,3,5,6], 5)
console.log('op :>> ', op);
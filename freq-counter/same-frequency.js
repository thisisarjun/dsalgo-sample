/* 
  i/p -> 2 +ve integers
  it should have same frequency of digits
  (182, 281) // true
  (1122, 2211) / true
  (123, 235) // false
*/

function sameFreq(num1, num2){

  let num1Str = num1.toString();
  let num2Str = num2.toString();

  if(num1Str.length !== num2Str.length){
    return false;
  }

  let freqMap = {};
  for(let value of num1Str){
    if(!freqMap.hasOwnProperty(value)){
      freqMap[value] = 0;
    }
    freqMap[value] += 1;
  }
  
  for(let value of num2Str){
    if(!freqMap[value]){
      return false;
    }
    freqMap[value] -= 1;
  }

  return true;
}
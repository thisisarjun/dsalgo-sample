/* 
  from input parameters, return true if there is duplicates
*/

function areThereDuplicates(...params){
  if(params?.length === 0){
    return true;
  }
  let freqMap = {};
  for(let value of params){
    if(!freqMap[value]){
      freqMap[value] = 1;
      continue;
    }else{
      return true;
    }
  }
  return false;

}
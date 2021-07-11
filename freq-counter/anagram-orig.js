/*
  better solution, with less space complexity
  lookup to be used once, no unnecessary lookups
*/
function validateAnagram(str1, str2){
  
  if(str1.length !== str2.length){
    return false;
  }

  if(str1.length === 0){
    return true;
  }

  let str1Hash = {};
  for(let value of str1){
    if(!str1Hash.hasOwnProperty(value)){
      str1Hash[value] = 1;
      continue;
    }
    str1Hash[value] += 1;
  }

  for(let value of str2 ){
    if(!str1Hash[value]){
      return false;
    }

    str1Hash[value] -= 1;
  }
  
  return true;
  
}
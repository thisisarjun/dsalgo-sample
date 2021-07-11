function validateAnagram(str1, str2){
  
  if(str1.length !== str2.length){
    return false;
  }

  if(str1.length === 0){
    return true;
  }

  let str1Hash = {}, str2Hash = {};
  for(let value of str1){
    if(!str1Hash.hasOwnProperty(value)){
      str1Hash[value] = 1;
      continue;
    }
    str1Hash[value] += 1;
  }

  for(let value of str2){
    if(!str2Hash.hasOwnProperty(value)){
      str2Hash[value] = 1;
      continue;
    }
    str2Hash[value] += 1;
  }
  let isValid;
  for(let key in str1Hash){
    if(!str2Hash.hasOwnProperty(key) ||  (str1Hash[key] !== str2Hash[key] )) {
      isValid = false;
      break;
    }
    isValid = true;
  }

  return isValid;
}
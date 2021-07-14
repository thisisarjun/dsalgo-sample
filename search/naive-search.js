function naiveSearch(str, sub){

  let i = 0, j;
  let n = str.length;
  let m = sub.length;
  while(i < n - m){
    let  j = 0;
    if(str[i] === sub[j]){
      
      let k = i + 1, isFound = true; 
      j++;
      while(j < m){
        if(str[k] !== sub[j]){
          isFound = false;
          break;
        }
        j++;
        k++;
      }
      if(isFound){
        return true;
      }
    }
    i++;
  }
  return false;  
  
}
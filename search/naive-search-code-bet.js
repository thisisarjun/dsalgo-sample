function naiveSearch(str, sub){

  let i = 0, j;
  let n = str.length;
  let m = sub.length;
  console.log('n - m :>> ', n - m);
  while(i <= n - m){
    j = 0;
    if(str[i] === sub[j]){    
      let isFound = true; 
      while(j < m){
        if(str[i+j] !== sub[j]){
          isFound = false;
          break;
        }
        j++;        
      }
      if(isFound){
        return true;
      }
    }
    i++;
  }
  return false;  
  
}
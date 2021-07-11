function findLongestSubstring(str){
  if(!str) {
    return 0;
  }
  if(str.length === 1) {
    return 1;
  }
  let max = -Infinity, i =0, j = 1, dict = new Map();
  while(j< str.length){

    if(!dict.has(str[i])){
      dict.set(str[i], i);
    }
    if(!dict.has(str[j])){
      dict.set(str[j], j) ;
      j++;      
    }else{
      if(max < dict.size){
        max = dict.size;
      }
      i = dict.get(str[j]) + 1;
      j= i+1;
      dict.clear();
    }    
  }
  return max > dict.size ? max : dict.size;
  
}
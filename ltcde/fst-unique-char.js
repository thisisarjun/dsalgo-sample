var firstUniqChar = function(s) {
  
  let hash = {};
  for(let i = 0; i< s.length; i++){
      if(hash[s[i]] || hash[s[i]] === 0){ // already exists             
          hash[s[i]] =  -1;
      }else{
          hash[s[i]] =  i;                        
      }
  }  
  let op = -1;
  for( let i in hash){
      if(hash[i] >= 0){
          return hash[i]
      }
  }
  return op;
};
var reverse = function(x) {
    
  let xStr = x.toString();
  
  let i = 0, j = xStr.length - 1;
  if(x[0] === '-'){
      i = 1
  }
  while(i < j){
      
      let temp = s[i];
      s[i] = s[j];
      s[j] = temp
            
      i++;
      j--;
  }
  
  x = parseInt(xStr);
  if(x < Math.pow(-2, 31) || x > ( Math.pow(2, 31) - 1 ) ){
      return 0;
  }
  return x;
};
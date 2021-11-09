var countAndSay = function(n) {
    
  let val = "1", str = null;
  if(n === 1){
    return val;
  }
  for(let i = 2; i <= n; i++){
    if(str){
      val = str;
    }
      let c = val[0], chArr = [], count = 1;
      
      for(let j = 1; j < val.length; j++){
        
          if(c !== val[j]){            
              chArr.push(count);
              chArr.push(c);              
              c = val[j];
              count = 1;
          }else{
            count++;
          }
      }
      
      chArr.push(count);
      chArr.push(c);
      str = chArr.join('')
  }
  return str;
};

let op = countAndSay(30);
console.log('op :>> ', op);
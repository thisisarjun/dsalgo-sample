function reverse(str){

  function helper(str){
    let len = str.length;
    if(len === 0) return '';
    if(len === 1) return str[0];
    
    return str[len-1] + helper(str.slice(0, len-1) );
  }
  return helper(str);

}
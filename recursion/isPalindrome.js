function isPalindrome(str){
  let len = str.length;
  if(len === 0 || len === 1){
    return true;    
  }
  if(str[0] !== str[len - 1]){
    return false;
  }

  return isPalindrome(str.slice(1, len - 1));
}
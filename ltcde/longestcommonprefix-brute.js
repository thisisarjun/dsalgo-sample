/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let isMatch = true, ptr = 0, i = 0, count = 0, currVal = null, lcp ='';
  while(isMatch && strs[i][ptr])  {
    if(!currVal){
      currVal = strs[i][ptr];
    }else if(currVal !== strs[i][ptr]){
      isMatch = false;
      continue;
    }
    if(i === strs.length - 1){
      i = 0;
      ptr++;
      count++;
      lcp+=currVal;
      currVal = null;
    }else{
      i++;
    }
  }
  return lcp;
};


let strs = ["flow","flow","flower"];
let op = longestCommonPrefix(strs);
console.log('op :>> ', op);
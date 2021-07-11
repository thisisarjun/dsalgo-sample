/* 
  i/p -> 2 strings
  1st string should be in second string -> only order matters, need not be consecutive
  eg:
    abc, abracadabra // true
    abc, acb // false, wrong order
*/

function isSubSequence(str1, str2){
  if(str2.length < str1.length){
    return false;
  }

  let i=0,j=0, counter=0;
  while(i < str1.length && j < str2.length){    
    if(str1[i] === str2[j]){
      counter+=1;
      i+=1;
    }
    j+=1;
  }  
  if(counter === str1.length){
    return true;
  }else{
    return false;
  }
}
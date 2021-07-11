/* 
  i/p two array
  o/p true/false -> array of 2nd should contain square of first element arrays
*/

function same(arr1:number[], arr2: number[]): boolean{
  if(arr1.length !== arr2.length){
    return false;
  }
  let arr1Hash:Record<string,number> = {}
  for(let value of arr1){
    if(!arr1Hash.hasOwnProperty(value)){
      arr1Hash[value] = 1;
      continue;
    }
    arr1Hash[value] += 1;
  }

  let arr2Hash:Record<string,number> = {}
  for(let value of arr2){
    if(!arr2Hash.hasOwnProperty(value)){
      arr2Hash[value] = 1;
      continue;
    }
    arr2Hash[value] += 1;
  }

  let output:boolean;
  for(let i in arr1Hash){
    let arr2Key =(parseInt(i)*parseInt(i)).toString(); 
    if(!arr2Hash[arr2Key] || arr2Hash[arr2Key] !== arr1Hash[i]){
      output = false;
      break;
    }
    output = true;
  }
  return output;
}

console.log(same([1,2], [1,4]));
function getDigit(num, place){
  return ( Math.floor( Math.abs(num) / Math.pow(10, place) ) ) % 10
}

function digitCount(num){
  if(num===0) return 0;
  return Math.floor(Math.log10(num)) + 1
}

function mostDigits(arr){
  let max = 0;
  for(let i = 0; i < arr.length; i++){
    let digCount = digitCount(arr[i]);
    max = Math.max(digCount, max);    
  }
  return max;
}

function clearBuck(buck){
  for(let i = 0; i < 10; i++){ // initialze
    buck[i] = [];
  }
}

function radixSort(input){

  let maxDigit = mostDigits(input);
  let buck = [];
  clearBuck(buck);

  for(let k=0; k<maxDigit; k++){
    for(let j =0; j<input.length; j++){
      buck[getDigit(input[j], k)].push(input[j]);
    }
    let inCount = 0;
    for(let i =0; i<10; i++){ // rearranging the input array
      let buckLen = buck[i].length;
      if(buckLen > 0){
        for(let m = 0; m < buckLen; m++){
          input[inCount++] = buck[i][m];
        }
      }
    }    
    clearBuck(buck);
  }
  return input;

}
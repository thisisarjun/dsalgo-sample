function nestedEvenSum (obj) {
  let finalSum = 0;

  function inner(obj){
    
    for(let i in obj){
      if(obj[i] % 2 === 0){
        finalSum += 2;
      }
      if(typeof obj[i] === 'object'){
        inner(obj[i]);
      }
    }
  }
  inner(obj);
  return finalSum;
  
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10
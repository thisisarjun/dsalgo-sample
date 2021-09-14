function generateRows(rnum){
  let vals = [];
  if(rnum === 1){
      return [1];
  }
  let ri = rnum - 1;    // 3

  let curVal=1;
  vals.push(1, ri);
  let loopLimit = ri -1;
  for(let cn  = 1; cn <= loopLimit; cn++){
      curVal *= ( ri * (ri-1) );
      curVal /= ( cn * (cn+1) );      
      vals.push(curVal);
      ri-=1;
  }
  return vals;
}
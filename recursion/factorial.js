function factorial(n){

  if(n === 0 || n === 1 || !n){
    return 1;
  }
  return n * factorial(n-1);
}
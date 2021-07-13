function capitalizedWords (arr) {
  
  let newArr = [];
  function inner(arr){
    if(arr.length === 0){
      return;
    }
    newArr.push(arr[0].toUpperCase());
    arr.splice(0,1);
    inner(arr);

  }
  inner(arr);
  return newArr;
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
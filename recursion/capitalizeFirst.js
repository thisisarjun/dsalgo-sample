function capitalizeFirst (arr) {
  let newArr = [];
  function inner(arr){

    if(arr.length === 0) return;

    let elem = arr[0]
    newArr.push( elem.charAt(0).toUpperCase() + elem.slice(1, elem.length) );    
    arr.splice(0,1);
    inner(arr);
  }
  inner(arr);
  return newArr;
}
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

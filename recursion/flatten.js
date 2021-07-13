// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
function flatten(arr){
  
  let newArr = [];
  
  function helper(arr){
    let i = 0;
    while(i < arr.length){      
      if(typeof arr[i] === 'number'){
        newArr.push(arr[i]);        
      }else if(Array.isArray(arr[i])){ // new array
        helper(arr[i]);
      }
      i++;
    }
  }
  helper(arr);
  return newArr;
}
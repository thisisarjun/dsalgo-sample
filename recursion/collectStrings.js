function collectStrings(obj){
  let newArr= [];
  function inner(obj){
    for(let i in obj){
      if(typeof obj[i] === 'string'){
        newArr.push(obj[i]);
      }
      if(typeof obj[i] === 'object'){
        inner(obj[i]);
      }
    }
  }
  inner(obj);
  return newArr;
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

collectStrings(obj) // ["foo", "bar", "baz"])
/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

function stringifyNumbers(obj){

  for(let i in obj){
    if(typeof obj[i] === 'number'){
      obj[i] = obj[i].toString();
    }
    if(typeof obj[i] === 'object'){
      stringifyNumbers(obj[i])
    }
  }

  return obj;
}
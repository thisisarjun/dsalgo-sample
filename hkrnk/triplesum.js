function removeDuplicate(arr){
    let hash = {};
    for(let i = 0; i <arr.length; i++){
        if(!hash[i]){
            hash[i] = true;
        }else{
            arr.splice(i, 1);
        }
    }   
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function calculatePivot(arr, start, end){

    let currPivot = arr[start];
    let pivotIdx = start;
    let swapIdx = start;
    for(let i = start+1; i<=end; i++){
        if(arr[i] < currPivot){
            swapIdx++;
            swap(arr, i, swapIdx);
        }
    }
    swap(arr, pivotIdx, swapIdx);
    return swapIdx;
}

function quickSort(arr, left =0, right = arr.length-1){

    if(left < right){
        let pivot = calculatePivot(arr, left, right);
        calculatePivot(arr, left, pivot - 1);
        calculatePivot(arr, pivot+1, right);
    }
}

function getSmallerThanOrEqualTo(arr, needle){

    let left =0, right = arr.length - 1;
    let smallerElems = -1;

    while(left <= right){
        let mid = Math.floor( (left + right) / 2);

        if(arr[mid] <= needle){
            smallerElems = mid;
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    return smallerElems + 1;
}

function getLargerThanOrEqualTo(arr, needle){
    let left =0, right = arr.length - 1;
    let largerElements = arr.length;

    while(left <= right){
        let mid = Math.floor( (left + right) / 2);

        if(arr[mid] >= needle){
            largerElements = mid;
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }

    return arr.length - largerElements;
}

// Complete the triplets function below.
function triplets(a, b, c) {
    // removing duplicates
    removeDuplicate(a);
    removeDuplicate(b);
    removeDuplicate(c);
    
    // sorting a and b
    quickSort(a);
    quickSort(c);
    
    let counter =0;
    for(let value of b){
        console.log(value);
        let smallerElems = getSmallerThanOrEqualTo(a, value);
        console.log(smallerElems)
        let largerElems = getSmallerThanOrEqualTo(c, value);
        console.log(largerElems);
        counter += (smallerElems * largerElems);
    }
    console.log(counter)
    return counter;
}

let a = [1,3,5,7];
let b = [5, 7, 9];
let c = [7, 9, 11, 13]
let op = triplets(a,b,c)
console.log(op)
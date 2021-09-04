function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function calculatePivot(arr, start, end){
    let currPivot = arr[start];    
    let swapIdx = start;
    for(let i = start + 1; i<=end; i++){
        if(arr[i] < currPivot){
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

function quick(arr, left = 0, right = arr.length - 1){
    if(left < right){
        let pivot = calculatePivot(arr, left, right);
        quick(arr, left, pivot-1);
        quick(arr, pivot+1, right);

    }
    return arr;
}
let arr = [29, 1, 4, 2, 33, 100, 99, 88, 55, 12, 55,10, 0, -1, 66];
let op = quick(arr);
console.log(op);

function merge(arr1, arr2){

  let l1 = arr1.length, l2 = arr2.length;
  let arr3 = [];
  let  i =0,j=0, k=0;
  while(i < l1 && j < l2){
    if(arr1[i] <= arr2[j]){
      arr3[k] = arr1[i];
      i++;
      k++;      
    }else{
      arr3[k] = arr2[j];
      j++;
      k++;
    }
  }
  if(i<l1){
    for(;i<l1;i++){
      arr3[k++] = arr1[i];
    }
  }
  if(j<l2){
    for(;j<l2;j++){
      arr3[k++] = arr2[j];
    }
  }
  return arr3; 
}


function mergeSort(arr1){

  if(arr1.length <= 1) return arr1;
  let mid = Math.floor(arr1.length/2);
  let lhand = mergeSort(arr1.slice(0, mid));
  let rhand = mergeSort(arr1.slice(mid));
  return merge(lhand, rhand);
}



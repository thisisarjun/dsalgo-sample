var rotate = function(nums, k) {
  
  let n = nums.length, b = [];
  for(let i = n-k, j=0; i < n; i++,j++){
      b[j] = nums[i];
  }
  for(let i = n-k-1; i>=0; i--){
      nums[i+k] = nums[i];
  }
  for(let i = 0; i < b.length; i++){
      nums[i] =b[i];
  }
};
var intersect = function(nums1, nums2) {
    
  let hash = new Map();
  for(let value of nums1){

      if(!hash.get(value)){
          hash.set(value, 0);
      }
      hash.set(value, hash.get(value) + 1)
  }
  
  let inter = [];
  for(let value of nums2){
      if(hash.get(value)){
          inter.push(value);
          hash.set(value, hash.get(value) - 1)

      }
  }
  
  return inter;
};
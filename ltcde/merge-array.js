
var merge = function(nums1, m, nums2, n) {
    if(n === 0){
        return;
    }
    m = m-1 >= 0 ? m-1 : 0;
    n = n-1;
    let i = nums1.length-1;
    while(n >= 0){
        if(nums2[n] > nums1[m]){
            nums1[i] = nums2[n];
            i--;
            n--;
        }else{
            nums1[i] = nums1[m];
            nums1[m] = nums2[n];
            m-- < 0 ? m : m--;
            n--;
            i--;
        }
    }
};

let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [4,5,6];
let n = 2;
merge(nums1, m, nums2, n);
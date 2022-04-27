/**
 * @param {number[]} nums
 * @return {number}
 */

// [3,0,1] =>  2
var missingNumber=function(nums){
    nums.sort((a,b) =>a-b)
    const n=nums.length
    for (let i = 0; i < n; i++) {
        if (nums[i]!==i) {
            return i
        }
        
    }
    return n;
}

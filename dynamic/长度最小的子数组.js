/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */


 var minSubArrayLen = function (s, nums) {
    let sum = nums[nums.length - 1]
    let i = nums.length - 1; j = nums.length - 1
    let len = Infinity
    while (j >= 0) {
      if (sum >= s) {
        len = Math.min(len, i - j + 1)
        sum -= nums[i--]
      }
      else {
        sum += nums[--j]
      }
    }
  
    return len===Infinity?0:len
  };
  
  
//   7
// [2,3,1,2,4,3]   =>  2
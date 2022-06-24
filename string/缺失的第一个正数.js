/**
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function(nums) {
    if(nums.length === 0) return 1
    if(nums.length === 1 && nums[0] <= 0) return 1
    let arr = []
    nums.forEach((v) => {
        if(v >=1) {
            arr[v] = 1
        }
    })

    if(!arr.length) return 1

    for(let i = 1; i<arr.length; i++) {
        if(!arr[i]) {
            return i
        }
    }
    return arr.length
};
// [1,2,0] =>3



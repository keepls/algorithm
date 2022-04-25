/**
 * @param {number[]} nums
 * @return {number}
 */


// [1,2,3,1]  => 4 
var rob=function(nums){
    let n=nums.length
    let a=0
    let b=nums[0]
    for (let i = 1; i < n; i++) {
        let temp=a
        a=Math.max(a,b)
        b=temp+nums[i]
    }
    return Math.max(a,b)
}
/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var productExceptSelf = function(nums) {
    let result = new Array(nums.length);
    let product = 1;

    //计算前缀积
    for(let i = 0;i<nums.length;i++){
        result[i] = product;
        product *= nums[i];
    }

    product = 1;
    //计算后缀积
    for(let i = nums.length - 1;i>=0;i--){
        result[i] *= product;
        product *= nums[i];
    }

    return result;
};

// [1,2,3,4] => [24,12,8,6]
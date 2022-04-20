
    // [2,7,11,15] 18=> [1,2]
    var twoSum=function(nums,target){
        for (let i = 0; i < nums.length; i++) {
            const x=nums[i]
            for (let j = i+1; j < nums.length; j++) {
                if (nums[j]==target-x) {
                    return [i,j]
                }
                
            }
        }
    }


    // [1,1,2]
    var removeDuplicates=function(nums){
        const n=nums.length
        if (n===0) {
            return 0
        }
        let fast=1,slow=1
        while (fast<3) {
            if (nums[fast]!==nums[fast-1]) {
                nums[slow]=nums[fast]
                ++slow
            }
            ++fast
        }
        return slow;
    }

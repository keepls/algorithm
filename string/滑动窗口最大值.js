/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

 var maxSlidingWindow = function(nums, k) {
    const n = nums.length;
    const q = [];
    for (let i = 0; i < k; i++) {
        while (q.length && nums[i] >= nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i);
    }

    const ans = [nums[q[0]]];
    for (let i = k; i < n; i++) {
        while (q.length && nums[i] >= nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i);
        while (q[0] <= i - k) {
            q.shift();
        }
        ans.push(nums[q[0]]);
    }
    return ans;
};
// [1,3,-1,-3,5,3,6,7] => [3,3,5,5,6,7]
// 3
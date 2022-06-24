/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */

 var fourSumCount = function(A, B, C, D) {
    const countAB = new Map();
    A.forEach(u => B.forEach(v => countAB.set(u + v, (countAB.get(u + v) || 0) + 1)));
    let ans = 0; 
    for (let u of C) {
        for (let v of D) {
            if (countAB.has(-u - v)) {
                ans += countAB.get(-u - v);
            }
        }
    }
    return ans;
};
// 条件
// 0 <= i, j, k, l < n
// nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

// [1,2]
// [-2,-1]  => 2
// [-1,2]
// [0,2]
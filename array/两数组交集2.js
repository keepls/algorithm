/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

 var intersect = function(nums1, nums2) {
    let res = nums1;
    res = res.filter(e => {
        let index = nums2.indexOf(e);
        return index !== -1 ? nums2[index] = 100 : false;  //①
    });
    return res;
};

// [1,2,2,1]  =>   [2,2]
// [2,2]
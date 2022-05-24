/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function (numbers, target) {
    let [left, right] = [0, numbers.length - 1];//左右指针
    while (left < right) {//
        if (numbers[left] + numbers[right] > target) {//和大了 right左移一位
            right--;
        } else if (numbers[left] + numbers[right] < target) {//和小了left右移一位
            left++;
        } else {
            return [left + 1, right + 1];
        }
    }
};

// [2,7,11,15]   =>  [1,2]
// 9
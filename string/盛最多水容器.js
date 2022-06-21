/**
 * @param {number[]} height
 * @return {number}
 */



 var maxArea = function(arr = []) {
    return loop(0, arr.length - 1, 0);
    function loop(start, end, max) {
        if (start === end) return max;
        var min = arr[start] > arr[end] ? arr[end] : arr[start];
        var sum = min * (end - start);
        if (sum > max) max = sum;
        if (arr[start] > arr[end]) return loop(start, end - 1, max);
        else return loop(start + 1, end, max);
    }
};


// [1,8,6,2,5,4,8,3,7] => 49
/**
 * @param {number} x
 * @return {number}
 */

 var mySqrt = function(x) {
    if (x === 1) {
        return 1;
    }
    let pre = x;
    let middle = parseInt(x / 2);
    while(1 === 1) {
        let product = middle * middle;
        if (product === x) {
            return middle;
        } else if (product > x) {
            pre = middle;
            middle = parseInt(middle / 2);
        } else if (product < x) {
            let newMiddle = parseInt((pre + middle) / 2);
            if (newMiddle === middle) {
                return middle;
            }
            middle = newMiddle;
        }
    }
};

// 10 => 3
/**
 * @param {number[]} prices
 * @return {number}
 */

 var maxProfit = function(prices) {
    const len = prices.length
    if(len<2) return 0;
    let res = 0, minPrice = prices[0]
    for(let i=1; i<len; i++){
        res = Math.max(res, prices[i] - minPrice)
        minPrice = Math.min(prices[i], minPrice)
    }
    return res
};
// [7,1,5,3,6,4] => 5
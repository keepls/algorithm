/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// 00000000000000000000000000001011  =>  3

var hammingWeight=function(n){
    let ret=0
    for (let i = 0; i < 32; i++) {
        if ((n & (1<<i)) !==0) {
            ret++
        }
    
    }
    return ret
}
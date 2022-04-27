/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */


//  00000010100101000001111010011100 =>    964176192 (00111001011110000010100101000000)

var reverseBits=function(n){
    let rev=0
    for (let i = 0; i < 32 && n>0; ++i) {
        rev |=(n & 1) << (31-i)
        n >>>=1
    }
    return rev >>>0
}

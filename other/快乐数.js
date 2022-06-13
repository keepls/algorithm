/**
 * @param {number} n
 * @return {boolean}
 */


 var isHappy = function(n) {
    let set = new Set()
    while(true){
        n = getSum(n)
        if(n === 1) return true
        else{
            if(set.has(n)) return false
            else set.add(n)
        }      
    }
};

let getSum = function(n) {
    let sum = 0
    while(n > 0) {
        sum += (n % 10) * (n % 10)
        n = parseInt(n / 10)
    }
    return sum
}

// 19 => true


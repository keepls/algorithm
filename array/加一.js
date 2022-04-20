

    // [1,2,3] = > [1,2,4]
  var plusOne=function(){
    const n=digits.length
    for (let i = n-1; i >= 0; --i) {
        if (digits[i]!==9) {
            ++digits[i]
            for (let j = i+1; j < n; ++j) {
                digits[j]=0
                
            }
            return digits;
        }
        
    }
    // digits 中所有的元素均为9
    const ans=new Array(n+1).fill(0)
    ans[0]=1
    return ans;
  }  








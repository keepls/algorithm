/**
 * @param {number} n
 * @return {string[]}
 */

 var generateParenthesis = function(n) {
    var res = new Set();
    //n代表'('的剩余数量，m代表')'的可使用数量，s表示已选择的字符串
    function dfs(n, m, s){
        if(n == 0){
            s += ')'.repeat(m);
            res.add(s);
            return;
        }
        m+=1;
        var temp = '('
        for(var i = 0;i <= m;i++){
            dfs(n-1, m-i, s+temp);
            temp += ')'
        }
    }
    if(n != 0) dfs(n, 0, '');
    return Array.from(res);
};


// 3 => ["((()))","(()())","(())()","()(())","()()()"]
/**
 * @param {string} s
 * @return {boolean}
 */

 var isPalindrome = function(s) {
    s = s.replace(/([^a-zA-Z0-9])/g, '');
    for (let i = 0, j = s.length - 1; i < j; i++,j--) {
        if (s[i].toLocaleLowerCase() !== s[j].toLocaleLowerCase()) {
            return false;
        }
    }
    return true;
};

// "A man, a plan, a canal: Panama" => true
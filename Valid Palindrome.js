/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[_\W]+/g, "");
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'))
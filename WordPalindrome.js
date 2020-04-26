const longestPalindrome = function (s) {
    const letters = {};
    for (let i in s) {
        const si = s[i]
        s[si] ? letters[si]++ : letters[si] = 1
    }
    let totalPairs = 0;
    let hashOdd = false;
    for (let i in letters) {
        let c = letters[i]
        let pairs = Math.floor(c / 2)
        if (!hashOdd && c - pairs * 2 >= 1) {
            hashOdd = true;
        }
        totalPairs += pairs;
    }
    return totalPairs * 2 + (hashOdd ? 1 : 0)
}

console.log(longestPalindrome('abccccccdd'))
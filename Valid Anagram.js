/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    if (s.length === 1) {
        return s[0] === t[0];
    }
    const hashTable = {};
    s.split('').map(letter => {
        if (!hashTable.hasOwnProperty(letter.charCodeAt(0))) {
            hashTable[letter.charCodeAt(0)] = 1
        } else {
            hashTable[letter.charCodeAt(0)] += 1
        }
    })
    t.split('').map(letter => {
        if (!hashTable.hasOwnProperty(letter.charCodeAt(0))) {
            return false
        } else {
            hashTable[letter.charCodeAt(0)] -= 1
        }
    })
    for (let i in hashTable) {
        if (hashTable[i] !== 0) {
            return false;
        }
    }
    return true;
};

console.log(isAnagram(s = "anagram", t = "nagaram"))
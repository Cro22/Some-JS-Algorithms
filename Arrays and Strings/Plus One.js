/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
    let changes = digits;
    changes = changes.join('')
    changes = BigInt(changes) + BigInt(1);
    changes = changes.toString();
    for (let i in changes) {
        digits[i] = Number(changes[i])
    }
    return digits;
};
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne2 = function (digits) {
    let n = digits.length
    for (let i = n - 1; i >= 0; i--) {
        let x = digits[i] + 1
        if (x < 10) {
            digits[i] = x
            return digits
        } else {
            digits[i] = 0
        }
    }
    digits.unshift(1)
    return digits
};
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
console.log(plusOne2([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
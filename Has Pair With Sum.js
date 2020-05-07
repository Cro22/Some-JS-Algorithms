/**
 * @param {number[]} arr
 * @param {number} sum
 * @return {boolean}
 */
const hasPair = function (arr, sum) {
    const hash = {};
    const search = function (item, i) {
        const charValue = item;
        if (hash.hasOwnProperty(charValue)) {
            return hash[charValue]
        } else {
            hash[charValue] = i;
        }
        return false;
    }
    for (let i in arr) {
        const arrValue = arr[i];
        if (i == 0) {
            search(arrValue, i);
        } else {
            const rest = sum - arrValue;
            if (search(rest, i) !== false) {
                return true
            }
        }
    }
    return false;
}

console.log(hasPair([1, 8, 4, 4], 8))
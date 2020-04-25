/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
    if (nums.length === 1) {
        target === nums[0] ? nums = [0, 0] : nums = [-1, -1]
        return nums;
    }
    let indexes = nums.map((num, index, array) => {
        if (num === target) return index;
    }).filter(x => {
        if (x !== undefined) {
            if (x === 0) {
                return '0'
            }
            return x
        }
    })
    if (!indexes.length) return [-1, -1]
    indexes = quickSort(indexes)
    return [indexes[0], indexes[indexes.length - 1]]
};
const quickSort = ([x = [], ...xs]) => {

    return (x.length === 0) ? [] : [
        ...quickSort(xs.filter(y => y <= x)),
        x,
        ...quickSort(xs.filter(y => y > x))
    ];
};
console.log(searchRange(nums = [2, 2], target = 2))

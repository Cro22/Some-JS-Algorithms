/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
    nums.sort(((a, b) => {
        return a - b;
    }))
    return nums[nums.length - k]
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
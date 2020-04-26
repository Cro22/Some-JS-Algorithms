/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function (intervals, newInterval) {

    return merge(intervals.concat([newInterval]));
};

const merge = function (intervals) {
    if (intervals.length <= 1) {
        return intervals
    }
    intervals.sort((a, b) => a[0] - b[0])

    const mergedArr = [intervals[0]]
    for (let i = 1; i < intervals.length; ++i) {
        let last = mergedArr.length - 1
        let current = intervals[i]

        if (mergedArr[last][1] >= current[0]) {
            mergedArr[last][1] = Math.max(mergedArr[last][1], current[1])
        } else {
            mergedArr.push(current)
        }
    }
    return mergedArr
};

console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))
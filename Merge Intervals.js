/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
    if (intervals.length <= 1) {
        return intervals
    }
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
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

console.log(merge([[1, 3], [8, 10], [15, 18], [2, 6]]))
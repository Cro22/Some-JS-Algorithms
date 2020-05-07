/**
 * @param {number[]} nums
 * @return {number[]}
 */
const countSmaller = function (nums) {
    const newArr = new Array(nums.length);
    nums.map((num, index) => {
        newArr[index] = 0;
        nums.map((numCom, index2) => {
            if (num > numCom && index2 > index) {
                newArr[index] += 1;
            }
        })
    })
    return newArr;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const countSmaller2 = function (nums) {
    let newNums = [...nums];
    newNums.sort(function (i1, i2) {
        return i1 - i2
    });
    let res = [];
    for (let i = 0; i < nums.length; ++i) {
        let seq = newNums.indexOf(nums[i]);
        res.push(seq);
        newNums.splice(seq, 1);
    }

    return res;
};

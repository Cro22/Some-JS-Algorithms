/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function (candies, extraCandies) {
    const candiesArr = [...candies]
    candiesArr.sort((can1, can2) => {
        return can1 - can2
    })
    const maximun = candiesArr[candiesArr.length - 1];
    return candies.map(x => {
        return x + extraCandies >= maximun
    })
};
console.log(kidsWithCandies([ 2, 5, 1, 3], 3))
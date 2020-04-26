/**
 * @param {number[]} A
 * @return {number}
 */
/**
 * @param {number[]} A
 * @return {number}
 */
const peakIndexInMountainArray = function(A) {
    let maxIndex = 0, max = -Infinity
    for(let i = 0; i < A.length; i++){
        if(max < A[i]){
            max = A[i]
            maxIndex = i
        }
    }
    return maxIndex
};
console.log(peakIndexInMountainArray([0, 1, 0]))
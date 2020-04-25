/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
    const newArray = quickSort(nums1.concat(nums2))
    if (newArray.length % 2 !== 0) return newArray[Math.floor(newArray.length / 2)]
    return (newArray[Math.floor(newArray.length / 2)-1] + newArray[(Math.floor(newArray.length / 2))]) / 2
};

const quickSort = ([x = [], ...xs]) => {

    return (x.length === 0) ? [] : [
        ...quickSort(xs.filter(y => y <= x)),
        x,
        ...quickSort(xs.filter(y => y > x))
    ];
};

console.log(findMedianSortedArrays(nums1 = [1, 2],
    nums2 = [3, 4]))
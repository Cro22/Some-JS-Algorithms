/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
    let max = 0, l = 0;
    let r = height.length - 1;

    while (l < r) {
        let area = Math.min(height[l], height[r]) * (r - l);
        if (area > max) {
            max = area;
        }
        if (height[l] > height[r]) {
            r--;
        } else {
            l++;
        }
    }

    return max;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 17]))
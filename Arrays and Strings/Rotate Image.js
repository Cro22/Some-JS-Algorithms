/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let tmp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = tmp;
        }
    }
    matrix.map(x => {
        x.reverse()
    });
};

console.log(
    rotate([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
)
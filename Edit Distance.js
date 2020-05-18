/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function(word1, word2) {
    const [row, col] = [word1.length + 1, word2.length + 1];

    const d = new Array(row).fill().map(() => new Array(col).fill(0))
    for (let i = 0; i < row; i++) {
        d[i][0] = i
    }
    for (let j = 0; j < col; j++) {
        d[0][j] = j
    }

    for (let i = 1; i < row; i++) {
        for(let j = 1; j < col; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                d[i][j] = d[i - 1][j - 1];
            } else {
                const minOp = Math.min(d[i - 1][j - 1], d[i - 1][j], d[i][j - 1]);
                d[i][j] = minOp + 1;
            }
        }
    }
    return d[row - 1][col - 1];
};

console.log(minDistance('casa', 'caca'))
/**
 * @param {string[]} words
 * @return {string[][]}
 */
const wordSquares = function (words) {
    const tree = {}
    words.map(x => {
        if (Object.keys(tree).length === 0) {
            tree[x.slice(0, 1)] = [];
            tree[x.slice(0, 1)].push(x)
        } else {
            if (!tree.hasOwnProperty(x.slice(0, 1))) {
                tree[x.slice(0, 1)] = [];
                tree[x.slice(0, 1)].push(x)
            } else {
                tree[x.slice(0, 1)].push(x)
            }
        }
    })
    return tree;
};

console.log(wordSquares(["abat", "baba", "atan", "atal"]))
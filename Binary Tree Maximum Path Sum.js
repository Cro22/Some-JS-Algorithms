/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxPathSum = function (root) {
    let max = Number.MIN_SAFE_INTEGER;
    const maxSum = function (node) {
        if (!node) return 0;
        const left = Math.max(maxSum(node.left), 0);
        const right = Math.max(maxSum(node.right), 0);
        max = Math.max(left + right + node.val, max);
        return Math.max(left, right) + node.val;
    };
    maxSum(root);
    return max;
};
const alternative = function (root) {

    let max_path_sum = 0;

    let calcSum = function (node) {
        if (node === null) {
            return 0;
        }
        const left = calcSum(node.left);
        const leftMax = left > 0 ? left : 0;
        const right = calcSum(node.right);
        const rightMax = right > 0 ? right : 0;
        const maxPath = leftMax + rightMax + node.val;
        max_path_sum = max_path_sum > maxPath ? max_path_sum : maxPath;

        return (leftMax > rightMax ? leftMax : rightMax) + node.val;
    }

    calcSum(root);

    return max_path_sum;

};
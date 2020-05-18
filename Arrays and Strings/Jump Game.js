const jumpGame = function (nums) {
    let jump = 0
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        jump = Math.max(nums[i], jump);
        if (jump === 0 && i !== len - 1) return false;
        jump--;
    }
    return true;
}


console.log(jumpGame([2, 0, 0, 0]))

function topKFrequent(nums, k) {
    const map = nums.reduce((acc, n) => {
        let count = acc.get(n) || 0;
        acc.set(n, count + 1);
        return acc;
    }, new Map());
    let ret = [...map].sort((a, b) => {
        return b[1] - a[1]
    });
    ret = ret.map(item => item[0])
    ret = ret.slice(0, k);
    return ret;
}

console.log(topKFrequent(nums = [5, 3, 1, 1, 1, 3, 73, 1], k = 1))
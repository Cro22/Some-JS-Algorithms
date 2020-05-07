function stock_runs(prices) {
    let count = 0;
    let max = -Infinity;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] !== prices[i + 1]) {
            count += 1;
        }
        if (prices[i] === prices[i + 1]) {
            count = 0;
        }
        if (count > max) {
            max = count;
        }
    }
    return count;
}

console.log(stock_runs([1,2,3]))
function stock_runs(prices) {
    let count = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] !== prices[i + 1]&& i !== 0 && i !== prices.length) {
            count += 1;
        }
    }
    return count;
}

console.log(stock_runs([2, 3, 4, 3, 2, 1]))
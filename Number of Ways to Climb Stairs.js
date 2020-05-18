const stairCount2 = function (n) {
    let res = Array(n +1);
    let temp = 0;
    res[0] = 1;
    for (let i = 1; i <= n; i++) {
        let s = i - 2 - 1;
        let e = i - 1;
        if (s >= 0) {
            temp -= res[s];
        }
        console.log(res)
        temp += res[e];
        res[i] = temp;
    }
    return res[n];
}
console.log(stairCount2(4))
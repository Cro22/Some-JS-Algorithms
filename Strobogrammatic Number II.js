/**
 * @param {number} n
 * @return {string[]}
 */
const findStrobogrammatic = function (n) {
    if (n === 1) {
        return ['0', '8', '1']
    } else if (n === 0) {
        return [];
    }

    const definitions = function (n, m) {
        if (n == 0) {
            return [""]
        }
        if (n == 1) return ["0", "1", "8"];

        let list = definitions(n - 2, m);
        let res = [];
        for (let i = 0; i < list.length; i++) {
            let s = list[i];

            if (n != m) res.push("0" + s + "0");

            res.push("1" + s + "1");
            res.push("6" + s + "9");
            res.push("8" + s + "8");
            res.push("9" + s + "6");
        }

        return res;
    }
    return definitions(n, n);
};

console.log(findStrobogrammatic(4))
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function (num1, num2) {
    if ((num1.length === 1 && Number(num1) === 0) || (num2.length === 1 && Number(num2) === 0)) {
        return "0";
    }
    num1 = num1.replace(/^0+/g, "");
    num2 = num2.replace(/^0+/g, "");
    let arr1 = num1.split(""),
        arr2 = num2.split("");
    let str = "",
        product = 0,
        result = "",
        solution = [];
    let firstStr = "",
        secondStr = "",
        mantissaZero = "";
    for (let i = arr1.length - 1; i >= 0; i--) { // step 1
        let state = "";
        if (Number(arr1[i]) === 0) {
            mantissaZero += "0";
            continue;
        }
        str = "";
        firstStr = "";
        secondStr = "";    // clear
        for (let j = arr2.length - 1; j >= 0; j--) {
            if (Number(arr2[j]) === 0) {
                str = Number(firstStr) === 0 ? "0" + str : firstStr + str;
                firstStr = "";
                continue;
            }
            product = Number(arr1[i]) * Number(arr2[j]);
            product += Number(firstStr);
            if (product < 10) {
                firstStr = "";
                secondStr = "" + product;
            } else {
                firstStr = ("" + product).substr(0, ("" + product).length - 1);
                secondStr = ("" + product).substr(("" + product).length - 1);
            }
            if (j) {
                str = secondStr + str;
            } else {
                str = product + str;
            }

        }
        solution.push(str + mantissaZero);
        mantissaZero += "0";
    }
    for (i = 1, result = solution[0]; i < solution.length; i++) {
        result = stringAdd(result, solution[i]);
    }

    function stringAdd(str1, str2) {
        let str = "",
            arr = [],
            arr1 = str1.split("").reverse(),
            arr2 = str2.split("").reverse(),
            length = (arr1.length >= arr2.length) ? arr1.length : arr2.length;
        for (let i = 0; i < length; i++) {
            if (arr[i] === undefined) {
                arr[i] = "0";
            }
            if (arr1[i] === undefined) {
                arr1[i] = "0";
            }
            if (arr2[i] === undefined) {
                arr2[i] = "0";
            }
            if (Number(arr[i]) + Number(arr1[i]) + Number(arr2[i]) < 10) {
                arr[i] = Number(arr[i]) + Number(arr1[i]) + Number(arr2[i]);
            } else {
                arr[i] = Number(arr[i]) + Number(arr1[i]) + Number(arr2[i]) - 10;
                arr[i + 1] = 1;
            }
        }
        str = arr.reverse().join("");
        return str;
    }

    return result;
};

console.log(multiply('02020', '05050'))
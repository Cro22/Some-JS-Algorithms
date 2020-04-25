/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
const licenseKeyFormatting = function (S, K) {
    S = S.split('').filter(x => {
        if (x !== '-') {
            return x;
        }
    }).reverse().map((x, index) => {
        if (index % K === 0 && index !== 0) {
           return  '-' + x;
        } else {
            return x;
        }
    }).join('');

    return S.split('').reverse().join('').toUpperCase();
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4))
const longestWord = function (words) {
    const letters = {};
    let maxLength = {}
    let maxWord = '';

    for (let i = 0; i < words.length; i++) {
        const wordI = words[i];
        let current = letters;
        let canBuilt = true;
        for (let j = 0; j < wordI.length; j++) {
            const c = wordI[i];
            if (current == letters || current(['.'])) {
                current = current[c]
            } else {
                canBuilt = false
                break;
            }
        }
        if (canBuilt && wordI.length >= maxLength) {
            let oldOdd = maxWord;
            if (maxLength < wordI.length || wordI.localeCompare(maxWord) < 0) {
                maxWord = wordI
                maxLength = wordI.length
            }
        }
    }
    return maxWord;
}
console.log(longestWord(['a', 'ama', 'ma']))
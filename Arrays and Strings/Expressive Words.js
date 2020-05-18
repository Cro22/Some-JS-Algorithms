const expressiveWords = function (S, words) {
    let count = 0;

    //count the characters frequency
    let freq = [{key: S[0], value: 1}];
    for (let i = 1; i < S.length; i++) {
        if (S[i] === S[i - 1]) {
            freq[freq.length - 1]['value']++
        } else {
            freq.push({
                'key': S[i],
                'value': 1
            });
        }
    }

    // run a loop over words

    for (let i = 0; i < words.length; i++) {
        // maintain 2 pointers for frequency array and index at current word
        let j = 0;
        let k = 0;
        // freq of current char in word
        let currFreq = 1;
        // loop over word chars
        while (j < words[i].length) {

            // if current char of word is not equal to freq array char
            // then we cannot break the stretchy word
            if (words[i][j] !== freq[k]['key']) break;

            // if current char is not equal to next char
            // then stop counting freq and check whether the current freq can be used
            // to form the freq of target word
            if (words[i][j] !== words[i][j + 1]) {
                // if target freq is less than current then it is not possible to form the word
                // because we can only increase the freq of char

                // if freq of target is 2 and current char freq is less than 2
                // since it is specified in question that we can increase the freq only if
                // the target freq is >= 3
                if (freq[k].value < currFreq || freq[k].value === 2 && currFreq < 2) {
                    break;
                } else {
                    // since we handled all the negatives situation where we can not form the word
                    // in if condition then in else it means that we can form the word.

                    // reset the currFreq to 1, increase j and k
                    j++;
                    k++;
                    currFreq = 1;
                }


            } else {
                // if the next char is equal, increment currFreq and j
                currFreq++;
                j++;
            }

        }

        // incrementing count only if we reached the end of current word and freq array
        if (words[i].length && j === words[i].length && k === freq.length) count++;
    }
    return count;
};

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function(pushed, popped) {
    let arrPushed = [].concat(pushed);
    let arrPoped = [].concat(popped);

    let state = [];

    for (let index = 0; index < arrPushed.length; index++) {
        const element = arrPushed[index];
        state.push(element);
        while (state[state.length - 1] === arrPoped[0] && state.length !== 0) {
            state.pop();
            arrPoped.shift();
        }
    }
    const valid = state.length === 0;
    return valid;
};
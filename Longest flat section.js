function longest_flat(array) {
    array.sort((a, b) => {
        return a - b
    })
    const maximum = array[array.length - 1];
    let count = 0
    array.map(value => {
        if (value === maximum) {
            count += 1;
        }
    })
    return count;
}

console.log(longest_flat([1, 1, 2, 2, 3, 3]))
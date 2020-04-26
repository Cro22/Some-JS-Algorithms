const getRow = function (Rowindex) {
    let row = [1];
    for (let index = 0; index < Rowindex; index++) {
        const newRow = new Array(index + 1);
        for (let i = 0; i <= index + 1; i++) {
            newRow[i] = (getItemsRow(row, i - 1) + getItemsRow(row, i))
        }
        row = newRow;
    }
    return row;
}

const getItemsRow = function (row, index) {
    if (index < 0 || index >= row.length) {
        return 0;
    }
    return row[index]
}
console.log(getRow(3));
const quickSort = ( [ x = [], ...xs ] ) => {

    return ( x.length === 0 ) ? [] : [
        ...quickSort( xs.filter( y => y <= x ) ),
        x,
        ...quickSort( xs.filter( y => y > x ) )
    ];
};
function quicksort2(arr) {
    if (arr.length === 0) {
        return [];
    }

    const left = [];
    const right = [];
    const pivot = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quicksort2(left).concat(pivot, quicksort2(right));
}
const arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
const result = quickSort(arr);
const result2 = quicksort2(arr);
console.log(result);
console.log(result2);

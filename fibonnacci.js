const array = []
const fib = function (item) {
    if (!Number.isInteger(item)) {
         throw new Error('Only Integers');
    }
    if (item === 0) {
        return 0;
    } else if (item === 1) {
        return 1
    } else {
        return fib(item - 1) + fib(item - 2)
    }
}

console.log(fib(5))
console.log(fib(0))
console.log(fib(1))
console.log(fib(20))
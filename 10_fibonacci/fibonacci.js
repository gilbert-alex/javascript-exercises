const fibonacci = function(n) {
    fibArr = [];
    if (n < 0 || isNaN(Number(n))) {
        return 'OOPS'
    }
    for (let f = 0; f <= n; f++) {
        if (f === 0) {
            fibArr.push(0);
        } else if (f === 1) {
            fibArr.push(1);
        } else {
            fibArr.push(fibArr[f-2] + fibArr[f-1]);
        }
    }
    return fibArr[n];
};

console.log(fibonacci(0));
console.log(fibonacci(5));
console.log(fibonacci(13));
console.log(fibonacci('5'));
console.log(fibonacci('string'));
console.log(fibonacci(-5));

// Do not edit below this line
module.exports = fibonacci;

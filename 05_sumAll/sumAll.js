const sumAll = function(arg1, arg2) {

    if (!Number.isInteger(arg1) || !Number.isInteger(arg2)) return 'ERROR';
    if (arg1 < 0 || arg2 < 0) return 'ERROR';
    
    const arr = [arg1, arg2];
    const arrSorted = arr.sort((a, b) => a - b);

    let counter = arrSorted[0]+1;
    let max = arrSorted[1]
    let pos = 1;

    while (counter < max) {
        arrSorted.splice(pos, 0, counter);
        counter++;
        pos++;
    }

    return arrSorted.reduce((accumulator, currentValue) => accumulator + currentValue);
};

// Do not edit below this line
module.exports = sumAll;
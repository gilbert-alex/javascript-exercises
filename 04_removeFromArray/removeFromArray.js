const removeFromArray = function(array, ...itemsToRemove) {

    /*
    // my solution
    for (const item of itemsToRemove) {
        let i = 0;
        while (i < array.length) {
            if (array[i] === item) {
                array.splice(i, 1);
            } else {
                i++;
            }
        }
    }
    return array;
    */

    /*
    // TOP solution 1
    const newArray = [];
    array.forEach((item) => {
        if (!itemsToRemove.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
    */

    // TOP solution 2
    return array.filter(val => !itemsToRemove.includes(val));

};

// Do not edit below this line
module.exports = removeFromArray;

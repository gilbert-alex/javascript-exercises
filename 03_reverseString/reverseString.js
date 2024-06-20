const reverseString = function(input) {

    let output = [];

    for (const letter of input) {
        output.unshift(letter);
    }

    return output.join('');

};

// Do not edit below this line
module.exports = reverseString;

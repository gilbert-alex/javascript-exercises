const repeatString = function(input, count) {

    /* string method solution
    return(`${input.repeat(count)}`);
    */

    // answer with a loop to play along with the instructions

    let output = '';

    if (count < 0) {
        return 'ERROR';
    } else {
        while (count > 0) {
            output += input;
            count--;
        }
    
        return output;
    }

};

// Do not edit below this line
module.exports = repeatString;

const leapYears = function(year) {
    /*
    // verbose nested if/then stmts as prototype
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
    */

    if (year % 4 === 0 && // every four years
        // except every 100 years unless every 400 years
        ( year % 100 !== 0 || year % 400 === 0 )) {
        return true;
    } else {
    return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

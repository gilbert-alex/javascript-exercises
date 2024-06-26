const palindromes = function (str) {
    let cleanStr = str.replaceAll(/[^a-z0-9]/gi, '').toLowerCase();
    const forward = Array.from(cleanStr);
    const backward = Array.from(cleanStr).reverse();
    return forward.toString() === backward.toString();

};

// Do not edit below this line
module.exports = palindromes;

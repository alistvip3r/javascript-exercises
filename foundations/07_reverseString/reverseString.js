const reverseString = function(string) {
    let array = string.split('');
    let newReverseArray = array.reverse();
    let newString = newReverseArray.join('');
    return newString;
};

// Do not edit below this line
module.exports = reverseString;

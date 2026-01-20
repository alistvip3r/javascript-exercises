const removeFromArray = function(firstArray, ...someArgs) {
   return firstArray.filter(item => 
    !someArgs.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;

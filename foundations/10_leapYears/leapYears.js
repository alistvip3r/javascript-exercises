const leapYears = function(getYear) {
    let year = Number(getYear); // Convert it to Number.
    return ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0));
}
// Do not edit below this line
module.exports = leapYears;

/**
 * Converts HP (Horizontal Pitch) to the specified metric unit.
 * 
 * @param {number} value - The number to be converted.
 * @returns {number} - The converted value in the specified unit, with two decimal places.
 */

const hpToMmRatio = 5.08;

function validInputValue(value) {
    if (typeof value !== 'number') {
        console.error('Invalid input value. Please provide a number.');
        return false;
    }
    return true;
}

function twoDecimalNumber(value) {
    return Number(value.toFixed(2));
}

function convertHpToMm(value) {
    if (!validInputValue(value)) {
        return null;
    }
    return twoDecimalNumber(value * hpToMmRatio); // Example conversion logic
}

function convertMmToHp(value) {
    if (!validInputValue(value)) {
        return null;
    }
    return twoDecimalNumber(value / hpToMmRatio); // Example conversion logic
}

// Exporting the functions to be used in other files
module.exports = {
    convertHpToMm,
    convertMmToHp
};
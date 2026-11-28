/*
Name: Airish Dhyn D. Castillo
Section: IV-BSIT A
Course: ELEC3 - Node.js
Activity: N2 - Modular Calculator
Date Completed: November 28, 2026
*/

// Format the calculator result
function formatResult(operation, a, b, result) {
    return `${a} ${operation} ${b} = ${result}`;
}

// Export the function
module.exports = formatResult;
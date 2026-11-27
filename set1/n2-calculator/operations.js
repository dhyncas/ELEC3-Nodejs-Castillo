/*
Name: Airish Dhyn D. Castillo
Section: IV-BSIT A
Course: ELEC3 - Node.js
Activity: N2 - Modular Calculator
Date Completed: November 28, 2026
*/

// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }

    return a / b;
}

// Average of two numbers
function average(a, b) {
    return (a + b) / 2;
}

// Export the functions
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    average
};
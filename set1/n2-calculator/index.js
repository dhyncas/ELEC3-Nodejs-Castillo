/*
Name: Airish Dhyn D. Castillo
Section: IV-BSIT A
Course: ELEC3 - Node.js
Activity: N2 - Modular Calculator
Date Completed: November 28, 2026
*/

// Import custom modules
const operations = require("./operations");
const formatResult = require("./formatter");

// Import built-in module
const os = require("os");

// Get command-line arguments
const operation = process.argv[2];
const input1 = process.argv[3];
const input2 = process.argv[4];

// Display program information
console.log("Node.js Modular Calculator");
console.log("Operating System:", os.platform());
console.log("#====================#");

// Check if operation was entered
if (!operation) {
    console.log("Error: Please enter an operation.");
    console.log("Available operations: add, subtract, multiply, divide, average");
    process.exit(1);
}

// Check if operation is valid
if (!operations[operation]) {
    console.log("Error: Invalid operation.");
    process.exit(1);
}

// Check if two numbers were entered
if (input1 === undefined || input2 === undefined) {
    console.log("Error: Please enter two numbers.");
    process.exit(1);
}

// Convert inputs to numbers
const a = Number(input1);
const b = Number(input2);

// Check if inputs are valid numbers
if (!Number.isFinite(a) || !Number.isFinite(b)) {
    console.log("Error: Invalid number.");
    process.exit(1);
}

// Perform calculation
try {
    const result = operations[operation](a, b);

    // Choose the symbol
    let symbol;

    if (operation === "add") {
        symbol = "+";
    } else if (operation === "subtract") {
        symbol = "-";
    } else if (operation === "multiply") {
        symbol = "*";
    } else if (operation === "divide") {
        symbol = "/";
    } else {
        symbol = "average";
    }

    // Display the result
    if (operation === "average") {
        console.log(`Average of ${a} and ${b} = ${result}`);
    } else {
        console.log("Result:", formatResult(symbol, a, b, result));
    }

} catch (error) {
    console.log("Error:", error.message);
}
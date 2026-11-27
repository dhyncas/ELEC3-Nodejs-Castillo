/*
Name: Airish Dhyn D. Castillo
Section: IV-BSIT A
Course: ELEC3 - Node.js
Activity: N2 - Modular Calculator
Date Completed: November 28, 2026
*/

// Format the calculator result
function formatResult(operation, numbers, result) { 
    let symbol;

    switch (operation) {
        case 'add':
            symbol = '+';   
            break;

         case 'subtract':
            symbol = '-';   
            break;
         
         case 'multiply':
            symbol = '*';   
            break;
        
        case 'divide':
            symbol = '/';   
            break;

        case 'average':
            symbol = 'avg';   
            break;
        
        //Format the other operations
        default:
            symbol = '';   
    }
    return `${numbers[0]} ${symbol} ${numbers[1]} = ${result}`; 

}

//Export the formatResult function
module.exports = {
    formatResult
};/*
Name: Airish Dhyn D. Castillo
Section: IV-BSIT A
Course: ELEC3 - Node.js
Activity: N2 - Modular Calculator
Date Completed: November 28, 2026
*/

// Format the result
function formatResult(operation, a, b, result) {
    return `${a} ${operation} ${b} = ${result}`;
}

// Export the function
module.exports = formatResult;

const divideNumbers = (num1, num2) => {
    return new Promise((resolve, reject) => {
        // Check if the denominator (second number) is zero
        if (num2 === 0) {
            // If it is zero, fail the promise with an error message
            reject(`Error: Cannot divide ${num1} by zero!`);
        } else {
            // Otherwise, succeed and pass back the result of the division
            const result = num1 / num2;
            resolve(result);
        }
    });
};

const testDivision = (a, b) => {
    divideNumbers(a, b)
        .then((output) => {
            // .then() runs if the promise RESOLVES successfully
            console.log(`Success: ${a} / ${b} = ${output}`);
        })
        .catch((error) => {
            // .catch() runs if the promise REJECTS with an error
            console.error(error);
        });
};


console.log("--- Starting Division Tests ---");
testDivision(10, 2);

testDivision(8, 0);

testDivision(5, 4);

testDivision(-15, 3);

testDivision(0, 0);
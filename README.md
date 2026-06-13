# Supreethraj_Task17

This project demonstrates using JavaScript `Promise` to perform division with error handling.

## Files
- `index.html` — loads `script.js` in the browser.
- `script.js` — defines a `divideNumbers` function that returns a promise.

## Behavior
- If the divisor is not zero, the promise resolves with the division result.
- If the divisor is zero, the promise rejects with an error message.
- `testDivision` calls `divideNumbers` and logs the result or error to the console.

## Run
1. Open `task17/index.html` in a browser.
2. Open the browser console to see success and error messages.

## Example output
- `Success: 10 / 2 = 5`
- `Error: Cannot divide 8 by zero!`
- `Success: 5 / 4 = 1.25`
- `Success: -15 / 3 = -5`
- `Error: Cannot divide 0 by zero!`

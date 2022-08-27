function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please enter a number';
    }
    return num1 + num2;
}
const result = add(20, 23);
console.log('Sum is:', result);

function multiply(num1, num2) {
    return num1 * num2;
}
const output = multiply(10, 15)
console.log('Output is:', output);
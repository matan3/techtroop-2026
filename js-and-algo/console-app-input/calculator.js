const num1 = Number(process.argv[2]);
const operation = process.argv[3];
const num2 = Number(process.argv[4]);

const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => b !== 0 ? a / b : "Cant devide by 0"
};
let currentOperation = operations[operation];

const output = currentOperation(num1, num2);
console.log(`${num1} ${operation} ${num2} = ${output}`);
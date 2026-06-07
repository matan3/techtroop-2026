const prompt = require('prompt-sync')();

const arr = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What year is it?", answer: "2026" }
];

let countWin = 0;
for (let item of arr) {
    const userAnswer = prompt(`${item.question} `);
    if (userAnswer === item.answer) {
        countWin++;
    }
}
console.log(`Final Score: ${countWin}/${arr.length} correct!`);




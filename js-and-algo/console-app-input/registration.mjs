import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

const name = await rl.question("what is your name? ");
const email = await rl.question("what is your email? ");
const age = await rl.question("what is your age? ");
const color = await rl.question("what is your favorite color? ");

console.log(`Registration Summary:\n Name: ${name} \n Email: ${email} \n Age: ${age} \n Favorite Color: ${color}`);
rl.close();
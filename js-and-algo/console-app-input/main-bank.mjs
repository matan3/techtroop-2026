import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import Bank from './bank.mjs';

const rl = readline.createInterface({ input, output });
const bank = new Bank();

let option;
while (option !== 4) {
    console.log(`=== Banking System ===\n 1) Check Balance \n 2) Deposit Money \n 3) Withdraw Money \n 4) Exit`);
    option = await rl.question("Choose option (1-4): ");
    if (isNaN(option) || option < 1 || option > 4) {
        console.log("Only numbers between 1 to 4");
        continue;
    }
    option = Number(option);
    let amount;
    switch (option) {
        case 1:
            bank.checkBalance();
            break;
        case 2:
            amount = await rl.question(`Enter amount to deposit: `);
            bank.depositMoney(amount);
            break;
        case 3:
            amount = await rl.question(`Enter amount to withdraw: `);
            bank.withdrawMoney(amount);
            break;
    }
}
rl.close();


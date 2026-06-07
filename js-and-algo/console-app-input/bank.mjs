export default class Bank {

    constructor() {
        this.balance = 0;
    }

    checkBalance() {
        console.log("Balance is: " + this.balance);
    }

    depositMoney(money) {
        money = Number(money.replace(/\$/g, ''));
        if (money <= 0) {
            console.log("positive numbers only");
            return;
        }
        this.balance += money;
        console.log("New balance: $" + this.balance);
    }

    withdrawMoney(money) {
        money = Number(money.replace(/\$/g, ''));
        if (money <= 0) {
            console.log("positive numbers only");
            return;
        }
        console.log("money: " + money);
        this.balance -= money;
        console.log("New balance: $" + this.balance);
    }
}

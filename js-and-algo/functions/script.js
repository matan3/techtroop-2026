// Exercise 1
const isEven = function (number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false

// Exercise 2
const oddNumbers = function (numbers) {
    for (let num of numbers) {
        if (!isEven(num)) {
            console.log(num);
        }
    }
}

// Exercise 3
const checkExists = function (arr, number) {
    for (let num of arr) {
        if (num === number) {
            return true;
        }
    }
    return false;
}
console.log(checkExists([1, 2, 3], 2));
console.log(checkExists([1, 2, 3], 5));

// Exercise 4
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42


// Exercise 5
const increaseByNameLength = function (money, name) {
    return money * name.length;
}
const makeRegal = function (name) {
    return "His Royal Highness, " + name;
}

const turnToKing = function (name, money) {
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

// Exercise 6
const armstrongNumbers = function () {
    for (let num = 100; num <= 999; num++) {
        const digits = num.toString();
        const digit1 = Number(digits[0]);
        const digit2 = Number(digits[1]);
        const digit3 = Number(digits[2]);
        if (num === Math.pow(digit1, 3) + Math.pow(digit2, 3) + Math.pow(digit3, 3)) {
            console.log(num);
        }
    }
};

armstrongNumbers();



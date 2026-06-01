// Exercise 1
let age = 20;
if (age > 18) {
    console.log("vote")
} else {
    console.log("not vote")
}

// Exercise 2
let score = 85;
if (score > 90 && score <= 100) {
    console.log("A");
} else if (score > 80 && score <= 90) {
    console.log("B");
} else if (score > 70 && score <= 80) {
    console.log("C");
} else if (score > 60 && score <= 70) {
    console.log("D");
} else if (score >= 0 && score <= 60) {
    console.log("F");
} else {
    console.log("invalid score")
}

// Exercise 3
let temperature = 20;
let weather = "sunny";
if (weather === "sunny") {
    if (temperature > 24) {
        console.log("go to the beach");
    } else if (temperature < 15) {
        console.log("Stay inside and read");
    } else {
        console.log("Go for a walk");
    }
} else if (weather === "rainy") {
    console.log("Watch a movie indoors");
} else if (weather === "cloudy") {
    {
        if (temperature > 21) {
            console.log("Go hiking");
        } else {
            console.log("Visit a museum");
        }
    }
}

// Exercise 4
let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;
if (usernameLength < 5) {
    console.log("Username must be at least 5 characters long");
} else if (passwordLength < 8) {
    console.log("Password must be at least 8 characters long");
} else if (userAge < 13) {
    console.log("You must be at least 13 years old to register");
} else {
    console.log("Registration successful");
}

// Exercise 5
let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6;
if (customerType === "vip") {
    console.log("You get a 20% discount!");
} else if (customerType === "premium") {
    if (dayOfWeek >= 1 && dayOfWeek <= 4) {
        console.log("You get a 10% discount!");
    } else {
        console.log("You get a 15% discount!");
    }
} else if (customerType === "regular") {
    if (purchaseAmount > 100) {
        console.log("You get a 10% discount!");
    } else if (purchaseAmount > 50) {
        console.log("You get a 5% discount!");
    } else {
        console.log("No discount");
    }
}

// Exercise 6
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

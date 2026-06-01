// Exercise 1
const p1 = {
    name: "Jill",
    age: 20,
    city: "New York",
}
const p2 = {
    name: "Robert",
    age: 20,
    city: "Los Angeles",
}
if (p1.age === p2.age) {
    if (p1.city === p2.city) {
        console.log("Jill wanted to date Robert");
    } else {
        console.log("Jill wanted to date Robert, but couldn't");
    }
}

// Exercise 2
const library = {
    books: [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
        { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    ]
}

// Exercise 3
const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

let name = 'teD';
if (reservations[name]) {
    if (!reservations[name].claimed) {
        console.log("Welcome, " + name + "!");
    } else {
        console.log("Sorry, someone already claimed this reservation.");
    }
} else {
    console.log("Sorry, we don't have a reservation under that name.");
}

if (reservations[name]) {
    if (!reservations[name].claimed) {
        console.log("Welcome, " + name + "!");
    } else {
        console.log("Sorry, someone already claimed this reservation.");
    }
} else {
    reservations[name] = { claimed: true };
    console.log("Welcome, " + name + "!");
}

// Exercise 4

const date = 3
const kitchen = {
    owner: "Geraldine",
    hasOven: false,
    fridge: {
        price: 500,
        works: true,
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "radish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

const radish = kitchen.fridge.items.find(item => item.name === "radish");
const daysExpired = date - radish.expiryDate;
const repairCost = kitchen.fridge.price / 2;
const hasOven = kitchen.hasOven;
const fridgeWorks = kitchen.fridge.works;

if (hasOven) {
    if (fridgeWorks) {
        console.log(`${kitchen.owner}'s radish expired ${daysExpired} day ago. 
            Weird, considering her fridge works. Luckily, she has an oven to cook the radish in.`);
    } else {
        console.log(`${kitchen.owner}'s radish expired ${daysExpired} day ago. 
            Probably because her fridge doesn't work. Luckily, she has an oven to cook the radish in.
             And she'll have to pay ${repairCost} to fix the fridge.`);
    }
} else {
    if (fridgeWorks) {
        console.log(`${kitchen.owner}'s radish expired ${daysExpired} day ago.
             Weird, considering her fridge works. Too bad she doesn't have an oven to cook the radish in.`);
    } else {
        console.log(`${kitchen.owner}'s radish expired ${daysExpired} day ago.
            Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the radish in.
              And she'll have to pay ${repairCost} to fix the fridge.`);
    }
}

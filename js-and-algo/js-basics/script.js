// Exercise 1
console.log((5 > 2) && false);
console.log(!("knife" === "sword"));
console.log((1 < 2) || (-1 > -1) || !false);
console.log("");
console.log((31 % 5) == "1");
console.log(!!true);
console.log("5th Avenue" != "5th Avenue");
console.log(52 !== "52");
console.log((undefined || null));

// Exercise 2
let a = 3
let c = 0
let b = a
b = a
c = a
b = c
a = b
console.log(a);
console.log(b);
console.log(c);

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

// Exercise 1
const numbers = [1,2,3,4,5,6,7,8,9,10]
numbers.splice(1, 2);
numbers[3] = 1;
numbers.splice(-4, 4);
numbers.unshift(0);
console.log(numbers);



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
if(p1.age === p2.age) {
    if(p1.city === p2.city) {
        console.log("Jill wanted to date Robert");
    } else{
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
if (reservations[name]){
    if (!reservations[name].claimed) {
        console.log("Welcome, " + name + "!");
    } else {
        console.log("Sorry, someone already claimed this reservation.");
    }
} else {
    console.log("Sorry, we don't have a reservation under that name.");
}

if (reservations[name]){
    if (!reservations[name].claimed) {
        console.log("Welcome, " + name + "!");
    } else {
        console.log("Sorry, someone already claimed this reservation.");
    }
} else {
    reservations[name] = { claimed: true };
    console.log("Welcome, " + name + "!");
}


// const lowerCaseName = name.toLowerCase();
// const reservationKey = Object.keys(reservations).find(key => key.toLowerCase() === lowerCaseName);

// if (reservationKey) {
//     if (!reservations[reservationKey].claimed) {
//         console.log("Welcome, " + name + "!");
//     } else {
//         console.log("Sorry, someone already claimed this reservation.");
//     }
// } else {
//     reservations[name] = { claimed: true };
//     console.log("Welcome, " + name + "!");
// }


// Exercise 4

const date = 3
const kitchen = {
    owner: "Geraldine",
    hasOven: true/false, // choose one
    fridge: {
        price: 500,
        works: true/false, // choose one
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

if(hasOven) {
    if(fridgeWorks) {
        console.log(`${kitchen.owner}'s radish expired ${daysExpired} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the radish in.`);
    } else {
        console.log(`${kitchen.owner}'s radish expired ${daysExpired} day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the radish in. And she'll have to pay ${repairCost} to fix the fridge.`);
    }
} else {
    if(fridgeWorks) {
        console.log(`${kitchen.owner}'s radish expired ${daysExpired} day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the radish in.`);
    } else {
        console.log(`${kitchen.owner}'s radish expired ${daysExpired} day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the radish in. And she'll have to pay ${repairCost} to fix the fridge.`);
    }    
}

//Exercises: Loops
// Exercise 1

// let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
// for(let companyIndex in companies){
//   console.log(companies[companyIndex])
// }

// for(let company of companies){
//   console.log(company)
// }

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for(let i = 0; i < names.length; i++){
  people.push({name: names[i], age: ages[i]})
}
for(let person of people){
  console.log(person)
}

// Exercise 2

for(let person of people){
  console.log(`${person.name} is ${person.age} years old`)
}

// Exercise 3

const posts = [
  {id: 1, text: "Love this product"},
  {id: 2, text: "This is the worst. DON'T BUY!"},
  {id: 3, text: "So glad I found this. Bought four already!"}
]

for(let post of posts){
  if(post.id === 2){
    posts.splice(posts.indexOf(post), 1);
  }
}
for(let post of posts){
  console.log(post)
}

// Exercise 4
const posts2 = [
  {
    id: 1, 
    text: "Love this product",
    comments: []
  },
  { 
    id: 2, 
    text: "This is the worst. DON'T BUY!", 
    comments: [
                {id: 1, text: "Idiot has no idea"}, 
                {id: 2, text:"Fool!"}, 
                {id: 3, text: "I agree!"}
              ]
   },
   {
    id: 3, 
    text: "So glad I found this. Bought four already!",
    comments: []
   }
]

for(let post of posts2){
  if(post.id === 2){
    for(let comment of post.comments){
      if(comment.id === 3){
        post.comments.splice(post.comments.indexOf(comment), 1);
      }
    }
  }
}
for(let post of posts2){
  console.log(post)
  for(let comment of post.comments){
    console.log(comment.id, comment.text)
  }
}

// Exercise 5

const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

for(let letter in dictionary){
  console.log(`Words that begin with ${letter}:`)
  for(let word of dictionary[letter]){
    console.log(word)
  };
}
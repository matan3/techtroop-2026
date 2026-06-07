// Exercise 1

// 8
// 1846

// Exercise 2
// {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// Exercise 3
// Your name is Alejandro and you like purple
// Your name is Melissa and you like green
// Your name is undefined and you like green

// Exercise 4
// Maya
// Marisa
// Chi

// Exercise 5
// Raindrops on roses
// whiskers on kittens
// ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']

// Exercise 1
let meatArr = ["beef","chicken"];
let vegetableArr = ["rabbit","carrots","potatoes","lettuce"];
[meatArr, vegetableArr] = [ [...meatArr, vegetableArr[0]], vegetableArr.slice(1) ];

// Exercise 2
var firstPiece = { id: 101, name: 'Ofri' }
var seoncdPiece = { country: 'Israel'}
console.log({ ...firstPiece, ...seoncdPiece });

// Exercise 1
let employeesArr = [
    { name: "Joey", id: 1, age: 26 },
    { name: "Lily", id: null, age: 24 },
    { name: "Alice", id: 7, age: null },
    { name: "Sam", id: 8, age: 24 },
    { name: "Ray", id: null, age: null }
]

employeesArr.forEach(item => {
    if ((item.id ?? null) === null || (item.age ?? null) === null) {
        console.log(item.name);
    }
})


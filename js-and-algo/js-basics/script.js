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
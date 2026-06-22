//#1
// Given an array of integers, return the largest number in the array.
// You may not use any built-in max functions.
//
// Constraints: the array will always have at least one element.
// Think about what variable you need to track as you loop through.
//
// Hint: start by assuming the first element is the max, then update
// your assumption as you go.
//
// Input:  [3, 7, 1, 9, 4]  →  Output: 9
// Input:  [-5, -1, -8, -3] →  Output: -1

// function findMax(arr) {
//     let max = arr[0];
//     for (let num of arr) {
//         if (num > max) {
//             max = num;
//         }
//     }
//     return max;
// }

// function findMax(arr) {
//     let max = arr[0];
//     arr.forEach(num => {
//         if (num > max) {
//             max = num;
//         }
//     });
//     return max;
// }
// console.log(findMax([3, 7, 1, 9, 4]));
// console.log(findMax([-5, -1, -8, -3]));


//#2
// Given a string, return it reversed.
// You may not use any built-in reverse functions.
//
// Constraints: the string will only contain lowercase letters.
// Think about iterating from the end toward the beginning.
//
// Hint: you can build a new string character by character by iterating backwards.
//
// Input:  "hello"     →  Output: "olleh"
// Input:  "algorithm" →  Output: "mhtirogla"

// function reverseString(str) {
//     let newStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return newStr;
// }
// console.log(reverseString("hello"));
// console.log(reverseString("algorithm"));


// function reverseString(str) {
//     let newStr = "";
//     for (const char of str) {
//         newStr = char + newStr;
//     }
//     return newStr;
// }
// console.log(reverseString("hello"));
// console.log(reverseString("algorithm"));


//#3
// Given a string, return the number of vowels (a, e, i, o, u) it contains.
// Treat uppercase and lowercase the same.
//
// Constraints: input may contain spaces and mixed case. Vowels are only a e i o u.
//
// Hint: a string of vowels makes the membership check clean —
// check if each character is inside it.
//
// Input:  "hello world" →  Output: 3
// Input:  "Algorithm"   →  Output: 3

function countVowels(str) {
    str = str.toLowerCase();
    let count = 0;
    let vowels = "aeiou";
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("hello world"));
console.log(countVowels("Algorithm"));
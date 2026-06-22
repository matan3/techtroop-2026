//#4
//Given an array of integers, return how many numbers
// in the array are strictly greater than the average.
//
// Constraints: the array will always have at least one element.
//
// Input:  [1, 2, 3, 4, 5]  →  Output: 2  (4 and 5 are above average 3)
// Input:  [10, 10, 10, 20] →  Output: 1  (only 20 is above average 12.5)

// function countAboveAverage(arr) {
//     let avg = arr.reduce((total, num) => total + num, 0) / arr.length;
//     let count = 0;
//     arr.forEach(num => num > avg ? count++ : 0);
//     return count;
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(countAboveAverage(arr));
// arr = [10, 10, 10, 20];
// console.log(countAboveAverage(arr));



// #5 
//Given an array of integers, return the element that appears
// most frequently. If there is a tie, return the one that appears
// first in the array.
//
// Constraints: the array will always have at least one element.
//
// Hint: think about how you can count occurrences of each element
// as you loop through, then find the highest count.
//
// Input:  [1, 2, 2, 3, 3, 3]  →  Output: 3
// Input:  [5, 1, 5, 2, 1, 5]  →  Output: 5
// Input:  [4, 4, 2, 2, 1]     →  Output: 4  (tie → first one wins)

// function mostFrequent(arr) {
//     let max = 0;
//     let maxNum = 0;
//     let x = {};

//     for (let num of arr) {
//         x[num] = (x[num] || 0) + 1;
//         if (x[num] > max) {
//             max = x[num];
//             maxNum = num;
//         }
//     }
//     return maxNum;
// }

// let arr = [1, 2, 2, 3, 3, 3];
// console.log(mostFrequent(arr));
// arr = [5, 1, 5, 2, 1, 5];
// console.log(mostFrequent(arr));
// arr = [4, 4, 2, 2, 1];
// console.log(mostFrequent(arr));
// arr = [2, 4, 2, 4, 1];
// console.log(mostFrequent(arr));



// #6
// Given a string of words separated by spaces, return the longest word.
// If there is a tie, return the first one.
//
// Constraints: the string will always have at least one word.
// You may not use any built-in sort functions.
//
// Input:  "the quick brown fox"   →  Output: "quick"
// Input:  "cat elephant dog"      →  Output: "elephant"
// Input:  "one two six ten"       →  Output: "one"  (tie → first wins)

// function longestWord(str) {
//     return str.split(" ").sort((a, b) => b.length - a.length)[0];
// }

// function longestWord(str) {
//     const words = str.split(" ");
//     let longestWord = "";
//     words.forEach(word => {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     })
//     return longestWord;
// }


// let Input1 = "the quick brown fox";
// let Input2 = "cat elephant dog";
// let Input3 = "one two six ten";
// console.log(longestWord(Input1));
// console.log(longestWord(Input2));
// console.log(longestWord(Input3));


// #7 
// Given two strings, return true if they are anagrams of each other,
// false otherwise. An anagram uses the same characters the same number
// of times, just in a different order.
//
// Constraints: strings will only contain lowercase letters, no spaces.
//
// Input:  "listen", "silent"  →  Output: true
// Input:  "hello",  "world"   →  Output: false
// Input:  "cat",    "car"     →  Output: false

// function isAnagram(a, b) {
//     let sortedA = a.split("").sort().join("");
//     let sortedB = b.split("").sort().join("");
//     return sortedA === sortedB ? true : false;
// }

// let a = "listen";
// let b = "silent";
// console.log(isAnagram(a, b));
// let a2 = "hello";
// let b2 = "world";
// console.log(isAnagram(a2, b2));



// // Given an array of integers and a target number, return all pairs
// // of elements that add up to the target. Each pair should be returned
// // as an array of two numbers, and you should return an array of all pairs.
// // Avoid duplicate pairs.
// //
// // Constraints: the array may contain positive and negative integers.
// // A number cannot be paired with itself at the same index.
// //
// // Hint: think about every possible combination of two elements,
// // then check if they add up to the target.
// //
// // Input:  [1, 2, 3, 4, 5], target 6  →  Output: [[1,5], [2,4]]
// // Input:  [1, 1, 2, 3],    target 4  →  Output: [[1,3]]
// // Input:  [0, -1, 2, -3],  target -1 →  Output: [[0,-1], [2,-3]]

// // function findPairs(arr, target) {
// //     const set = new Set();
// //     let output = [];
// //     for (let num of arr) {
// //         if (set.has(target - num)) {
// //             output.push([target - num, num]);
// //         } else {
// //             set.add(num);
// //         }
// //     }
// //     return output;
// // }

// // // Tests
// // console.table(findPairs([1, 2, 3, 4, 5], 6)); // → [[1,5], [2,4]]
// // console.table(findPairs([1, 1, 2, 3, 3], 4));     // → [[1,3]]
// // console.table(findPairs([0, -1, 2, -3], -1));  // → [[0,-1], [2,-3]]



// // #9
// // Given a string of words separated by spaces, return the sentence
// // with the word order reversed. The words themselves should stay intact.
// //
// // Constraints: the string will always have at least one word.
// // You may not use any built-in reverse functions.
// //
// // Input:  "hello world"          →  Output: "world hello"
// // Input:  "the quick brown fox"  →  Output: "fox brown quick the"
// // Input:  "one"                  →  Output: "one"

// function reverseWords(str) {
//     const words = str.split(' ');
//     let newStr = "";
//     for (let word = words.length-1; word >= 0; word--) {
//         newStr += words[word] + " ";
//     }
//     return newStr.slice(0, -1);
// }

// // Tests
// console.log(reverseWords(""));
// console.log(reverseWords("hello world"));          // → "world hello"
// console.log(reverseWords("the quick brown fox"));  // → "fox brown quick the"
// console.log(reverseWords("one"));                  // → "one"


//     // for (const word of words.toReversed()) {
//     //     newStr += word + " ";
//     // }



// #10
// Given a sorted array of integers, remove the duplicates in-place
// so each element appears only once, and return the new length.
// The array is sorted, so duplicates will always be adjacent.
//
// Constraints: do not create a new array, modify the original in-place.
// The order of elements must stay the same.
//
// Input:  [1, 1, 2, 3, 3, 4]  →  Output: 4  (array becomes [1, 2, 3, 4])
// Input:  [1, 1, 1, 1]        →  Output: 1  (array becomes [1])
// Input:  [1, 2, 3]           →  Output: 3  (no duplicates, unchanged)

// function removeDuplicates(nums) {
//     if (nums.length === 0) return 0;

//     let writePointer = 1;
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[i - 1]) {
//             nums[writePointer] = nums[i];
//             writePointer++;
//         }
//     }
//     return writePointer;
// }

// // Tests
// console.log(removeDuplicates([1, 1, 2, 3, 3, 4])); // → 4
// console.log(removeDuplicates([1, 1, 1, 1]));        // → 1
// console.log(removeDuplicates([1, 2, 3]));           // → 3



// #11
// Given two arrays, return a new array containing only the elements
// that appear in both arrays. Each element in the result should be unique.
//
// Constraints: the result can be in any order.
// Each element in the result must appear only once even if it
// appears multiple times in both arrays.
//
// Input:  [1, 2, 3, 4], [3, 4, 5, 6]     →  Output: [3, 4]
// Input:  [1, 1, 2, 3], [1, 2, 2]        →  Output: [1, 2]
// Input:  [1, 2, 3],    [4, 5, 6]        →  Output: []


// function intersection(arr1, arr2) {
//     let result = [];
//     const setArr1 = new Set(arr1);
//     const setArr2 = new Set(arr2);

//     for (let num of setArr1) {
//         if (setArr2.has(num)) {
//             result.push(num);
//         }
//     }
//     return result;
// }

// // Tests
// console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));  // → [3, 4]
// console.log(intersection([1, 1, 2, 3], [1, 2, 2]));     // → [1, 2]
// console.log(intersection([1, 2, 3], [4, 5, 6]));        // → []


// function intersection(arr1, arr2) {
//     let result = [];
//     const set = new Set();
//     for (let num of arr1) {
//         set.add(num);
//     }
//     for (let i = 0; i < arr2.length - 1; i++) {
//         if (arr2[i] === arr2[i+1])

//             if (set.has(num)) {
//                 result.push(num);
//             }
//     }
//     return result
// }





// const twoSum = function (number, target) {
//     const set = new Set();
//     number.forEach(num => set.add(num));

//     for(let num of number){
//         if (set.has(target - num)) {
//             return true;
//         }
//     }

//     return false;
// }

// // set [2, 7, 2, 11, 15]
// // const number = [2, 7, 7, 2, 11, 15];
// const number = [1];

// const target = 2
// console.log(twoSum(number, target))



// #13
// Given a string, return the length of the longest substring
// that contains no repeating characters.
//
// Constraints: the string may contain letters, digits, and spaces.
// An empty string should return 0.
//
// Input:  "abcabcbb"  →  Output: 3  ("abc")
// Input:  "bbbbb"     →  Output: 1  ("b")
// Input:  "pwwkew"    →  Output: 3  ("wke")
// Input:  ""          →  Output: 0

// function lengthOfLongestSubstring(str) {
//     if (str.length === 0) {
//         return 0;
//     }
//     if (str.length === 1) {
//         return 1;
//     }

//     let max = 0;
//     const set = new Set();
//     let p = 0;
//     set.add(str[p]);

//     let i = 1;
//     while (i < str.length) {
//         if (set.has(str[i])) {
//             if (i - p > max) {
//                 max = i - p;
//             }
//             set.clear();
//             p++;
//             i = p + 1;
//             set.add(str[p]);
//         } else {
//             set.add(str[i]);
//             i++;
//         }
//     }
//     if (max === 0) {
//         max = set.size;
//     }
//     return max;

// }

// // Tests
// console.log(lengthOfLongestSubstring("abcabcbb")); // → 3
// console.log(lengthOfLongestSubstring("bbbbb"));    // → 1
// console.log(lengthOfLongestSubstring("pwwkew"));   // → 3
// console.log(lengthOfLongestSubstring(""));         // → 0

// console.log(lengthOfLongestSubstring("a"));         // → 1
// console.log(lengthOfLongestSubstring("ab"));         // → 2
// console.log(lengthOfLongestSubstring("abc"));         // → 3
// console.log(lengthOfLongestSubstring("abcb"));         // → 3

// console.log(lengthOfLongestSubstring("bcbf"));         // → 2
// console.log(lengthOfLongestSubstring("abcd"));         // → 4



// #14
// Given an array of integers, move all zeros to the end
// while keeping the relative order of non-zero elements.
// Do this in-place, do not create a new array.
//
// Constraints: modify the original array in-place.
// The order of non-zero elements must stay the same.
// Do not use any extra arrays, objects, or sets.
//
// Input:  [0, 1, 0, 3, 12]  →  Output: [1, 3, 12, 0, 0]
// Input:  [0, 0, 1]         →  Output: [1, 0, 0]
// Input:  [1, 2, 3]         →  Output: [1, 2, 3]  (no zeros, unchanged)
// Input:  [0, 0, 0]         →  Output: [0, 0, 0]  (all zeros)

// function moveZeros(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] === 0) {
//             let j = i + 1;
//             while (arr[j] === 0 && j < arr.length - 1) {
//                 j++;
//             }
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
//     return arr;
// }

// // Tests
// console.log(moveZeros([0, 1, 0, 3, 12])); // → [1, 3, 12, 0, 0]
// console.log(moveZeros([0, 0, 1]));         // → [1, 0, 0]
// console.log(moveZeros([1, 2, 3]));         // → [1, 2, 3]
// console.log(moveZeros([0, 0, 0]));         // → [0, 0, 0]

// console.log(moveZeros([0, 0, 0, 1, 0]));         // → [1, 0, 0, 0, 0]
// console.log(moveZeros([0, 1, 2, 3, 0]));         // → [1, 2, 3, 0, 0]
// console.log(moveZeros([0, 1, 2, 0, 0, 3, 0]));         // → [1, 2, 3, 0, 0, 0, 0]
// console.log(moveZeros([0]));         // → [0]



// #14
// Given a SORTED array of integers and a target number, return true
// if any two elements add up to the target, false otherwise.
//
// Constraints: the array is sorted in ascending order.
// You may not use any extra arrays, objects, or hash maps.
//
// Input:  [1, 2, 3, 4, 6], target 6   →  Output: true   (2 + 4 = 6)
// Input:  [1, 2, 3, 4, 6], target 11  →  Output: false  (max pair is 4+6=10)
// Input:  [-2, 1, 3, 5, 8], target 6  →  Output: true   (1 + 5 = 6)

// function hasPairWithSum(arr, target) {
//     let i = 0;
//     let j = arr.length - 1;

//     while (i < j) {
//         if (arr[i] + arr[j] === target) {
//             return true;
//         }
//         arr[i] + arr[j] > target ? j-- : i++;
//     }
//     return false;
// }




// // Tests
// console.log(hasPairWithSum([1, 2, 3, 4, 6], 6));    // → true
// console.log(hasPairWithSum([1, 2, 3, 4, 6], 11));   // → false
// console.log(hasPairWithSum([-2, 1, 3, 5, 8], 6));   // → true

// #15
// Given an array of integers and a number K, find the maximum sum
// of any K consecutive elements in the array.
//
// Constraints: K will always be less than or equal to the array length.
// The array will contain at least K elements.
//
// Input:  [2, 1, 5, 1, 3, 2], K=3  →  Output: 9   (5+1+3)
// Input:  [1, 2, 3, 4, 5],    K=2  →  Output: 9   (4+5)
// Input:  [4, 4, 4, 4],       K=1  →  Output: 4

// function maxSumSubarray(arr, k) {

//     let sum = 0;
//     for (let i = 0; i < k; i++) {
//         sum += arr[i];
//     }
//     let max = sum;

//     let left = 0;
//     let right = k;
//     while(right < arr.length){
//         sum = sum - arr[left] + arr[right];
//         if (sum > max) {
//             max = sum;
//         }
//         left++;
//         right++;
//     }

//     return max;

// }

// // Tests
// console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // → 9
// console.log(maxSumSubarray([1, 2, 3, 4, 5], 2));     // → 9
// console.log(maxSumSubarray([4, 4, 4, 4], 1));        // → 4

// console.log(maxSumSubarray([2, 1, 5, 1, 3, 10], 3)); // → 14


// #16
// Given an array of positive integers and a target number, return
// how many contiguous subarrays have a sum equal to the target.
//
// Constraints: the array will only contain positive integers.
// A subarray must have at least one element.
//
// Think about when each pointer should move.
//
// Input:  [1, 2, 3, 4, 5], target 5  →  Output: 2  ([2,3] and [5])
// Input:  [1, 1, 1, 1, 1], target 2  →  Output: 4  ([1,1] appears 4 times)
// Input:  [2, 4, 6],        target 5  →  Output: 0  (no subarray sums to 5)

// function countSubarrays(arr, target) {
//     let left = 0;
//     let right = 0;
//     let count = 0;
//     let sum = 0;

//     while (right < arr.length) {
//         sum += arr[right];
//         while (sum > target) {
//             sum -= arr[left];
//             left++;
//         }
//         if (sum === target) {
//             count++;
//         }
//         right++;
//     }
//     return count;
// }

// // Tests
// console.log(countSubarrays([1, 2, 3, 4, 5], 5)); // → 2
// console.log(countSubarrays([1, 1, 1, 1, 1], 2)); // → 4
// console.log(countSubarrays([2, 4, 6], 5));        // → 0

// console.log(countSubarrays([2], 2));    
// console.log(countSubarrays([5, 2, 3, 4, 5], 5)); // → 2


// #17
// Given a string and a number K, return the maximum number of vowels
// in any substring of length K.
// Vowels are: a, e, i, o, u (lowercase only).
//
// Constraints: K will always be less than or equal to the string length.
// The string will only contain lowercase letters.
// You may not use any built-in methods to count vowels.
//
// Hint: count vowels in the first K characters as your starting window.
// As the window slides forward, what character leaves and what enters?
//
// Input:  "abciiidef", K=3  →  Output: 3  ("iii")
// Input:  "aeiou",     K=2  →  Output: 2  ("ae", "ei", "io", "ou" all have 2)
// Input:  "leetcode",  K=3  →  Output: 2  ("lee", "eet", "ode")

// function maxVowels(str, k) {
//     const vowelsSet = addingVowelsToSet();
//     let maxCount = 0;
//     let count = 0;
//     for (let i = 0; i < k; i++) {
//         if (vowelsSet.has(str[i])) {
//             count++;
//         }
//     }
//     maxCount = count;

//     let left = 0;
//     for (let right = k; right < str.length; right++) {
//         if (vowelsSet.has(str[right])) {
//             count++;
//         }
//         if (vowelsSet.has(str[left])) {
//             count--;
//         }
//         if (count > maxCount) {
//             maxCount = count;
//         }
//         left++;
//     }
//     return maxCount;

// }

// function addingVowelsToSet(){
//     const vowelsSet = new Set();
//     vowelsSet.add('a');
//     vowelsSet.add('e');
//     vowelsSet.add('i');
//     vowelsSet.add('o');
//     vowelsSet.add('u');
//     return vowelsSet;
// }

// // Tests
// console.log(maxVowels("abciiidef", 3)); // → 3
// console.log(maxVowels("aeiou", 2));     // → 2
// console.log(maxVowels("leetcode", 3));  // → 2

// Exercise 1
// O(n)

// Exercise 2
// O(Log n)

// Exercise 3
// O(1)

// Exercise 4
// O(nm)

// Exercise 5
// O(n)

// Exercise 6
const findDuplicates = function (ages) {
    const seen = {};
    ages.forEach(age => {
        if (seen[age]) {
            console.log(`${age} has a duplicate`);
        } else {
            seen[age] = true;
        }
    })
}
const ages = [2, 3, 4, 2, 1, 3, 2];
findDuplicates(ages);

// Exercise 7
const employees = {
    "ax01": { name: "Ray", age: 28, salary: 1300 },
    "qs84": { name: "Lucius", age: 31, salary: 840 },
    "bg33": { name: "Taylor", age: 18, salary: 2700 }
};
const findEmployeeSalary = employeeID => employees[employeeID] ? employees[employeeID].salary : "Employee not found";
console.log(findEmployeeSalary("ax01"));

// Exercise 8
const findIndex = (numbers, num) => {
    let left = 0;
    let right = numbers.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (numbers[mid] == num) {
            return mid;
        }
        if (num > numbers[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return "didn't find";
}

let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427, 442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852, 896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272, 1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667, 1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987]
console.log(findIndex(numbers, 2630));

// Exercise 9
// red - O(n^2)
// blue - O(n)
// yellow - O(log(n))
// green - O(1)
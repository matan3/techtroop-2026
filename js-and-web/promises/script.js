// Exercise 1

function checkLuckyNumber(num) {
    // TODO: Create and return a promise that:
    // 1. Waits 800ms (use setTimeout)
    // 2. Resolves with "Lucky!" if number is divisible by 7
    // 3. Resolves with "Not lucky" for other positive numbers
    // 4. Rejects with Error("Invalid number") if number is negative or zero

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num <= 0) {
                reject(new Error("Invalid number"));
            } else if (num % 7 === 0) {
                resolve("Lucky!");
            } else {
                resolve("Not lucky");
            }
        }, 800);
    })
}

checkLuckyNumber(7).then(message => console.log(message));
checkLuckyNumber(5).then(message => console.log(message));
checkLuckyNumber(-3).catch(message => console.error(message));

// Exercise 2

function processFile(filename, processingTime) {
    return new Promise((resolve, reject) => {
        console.log(`Starting to process ${filename}...`);

        setTimeout(() => {
            // 15% chance of failure for realistic simulation
            if (Math.random() < 0.15) {
                reject(new Error(`Failed to process ${filename}`));
            } else {
                const result = {
                    filename: filename,
                    size: Math.floor(Math.random() * 1000) + 100, // Random size
                    processedAt: new Date().toLocaleTimeString()
                };
                console.log(`✓ Completed ${filename}`);
                resolve(result);
            }
        }, processingTime);
    });
}

// TODO: Use Promise.all() to process these files concurrently:
const files = [
    { name: "document1.pdf", time: 2000 },
    { name: "image1.jpg", time: 1500 },
    { name: "data.csv", time: 3000 },
    { name: "report.docx", time: 1000 }
];

// TODO: 
// 1. Create an array of promises using the files array
// 2. Use Promise.all() to wait for all files to complete
// 3. Log total processing time and all results
// 4. Handle the case where any file fails

// Bonus: Try Promise.allSettled() to see results even if some files fail

const filePromises = files.map(file => processFile(file.name, file.time));
const startTime = Date.now();

Promise.allSettled(filePromises)
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log("Success:", result.value);
            } else {
                console.error("Failed:", result.reason.message);
            }
        });
        const totalTime = Date.now() - startTime;
        console.log(`Total processing time: ${(totalTime / 1000).toFixed(2)} seconds`);
    })
    .catch(error => console.log(error))


// Exercise 3

// Simulated inventory database
const inventory = {
    'laptop': { price: 999, stock: 5 },
    'mouse': { price: 25, stock: 10 },
    'keyboard': { price: 75, stock: 0 }, // Out of stock
    'monitor': { price: 299, stock: 3 }
};

function checkInventory(items) {
    // TODO: Return a promise that:
    // 1. Waits 500ms (simulating database check)
    // 2. Checks if all items are in stock
    // 3. Resolves with items if all available
    // 4. Rejects with specific item that's out of stock

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let item of items) {
                if (!inventory[item] || inventory[item].stock <= 0) {
                    return reject(new Error(`this item: ${item} out of stock`));
                }
            }
            resolve(items);
        }, 500);
    });
}

function calculateTotal(items) {
    // TODO: Return a promise that:
    // 1. Waits 200ms
    // 2. Calculates total price including 8% tax
    // 3. Resolves with { subtotal, tax, total }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const taxRate = 8;
            let subtotal = 0;
            for (let item of items) {
                if (inventory[item]) {
                    subtotal += inventory[item].price;
                }
            }
            const tax = (subtotal * taxRate) / 100;
            const total = subtotal + tax;
            resolve({ subtotal, tax, total });
        }, 200);
    });
}

function processPayment(amount) {
    // TODO: Return a promise that:
    // 1. Waits 1500ms (simulating payment processing)
    // 2. 90% success rate
    // 3. Resolves with { transactionId, amount, status: 'success' }
    // 4. Rejects with payment failure error
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.10) {
                reject(new Error(`Payment failure error`));
            }
            const status = "success";
            const transactionId = Math.floor(Math.random() * 10000);
            resolve({ transactionId, amount, status });
        }, 1500);
    });
}

function updateInventory(items) {
    // TODO: Return a promise that:
    // 1. Waits 300ms
    // 2. Reduces stock for each item
    // 3. Resolves with updated inventory status
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let item of items) {
                if (inventory[item]) {
                    inventory[item].stock--;
                }
            }
            resolve(inventory);
        }, 300);
    });

}

// TODO: Create a complete checkout function that:
// 1. Takes an array of item names
// 2. Chains all the above functions
// 3. Returns a promise with the final order result
// 4. Handles all possible errors appropriately

function checkout(itemNames) {

    return checkInventory(itemNames)
        .then((items) => {
            return calculateTotal(items);
        })
        .then((paymentInfo) => {
            return processPayment(paymentInfo.total);
        })
        .then((paymentResult) => {
            return updateInventory(itemNames);
        });

}

// Test cases:
checkout(['laptop', 'mouse'])           // Should succeed
    .then(result => console.log('Order success:', result))
    .catch(error => console.log('Order failed:', error.message));

checkout(['laptop', 'keyboard'])        // Should fail - keyboard out of stock
    .then(result => console.log('Order success:', result))
    .catch(error => console.log('Order failed:', error.message));

checkout(['monitor', 'mouse', 'laptop']) // Might fail at payment (10% chance)
    .then(result => console.log('Order success:', result))
    .catch(error => console.log('Order failed:', error.message));


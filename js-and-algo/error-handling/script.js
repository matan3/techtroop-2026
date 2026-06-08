// Exercise 1

const safeJsonParse = (json) => {
    try {
        return JSON.parse(json);
    } catch (err) {
        return "Invalid JSON format";
    }
}

console.log(safeJsonParse('{"name": "John"}'));
// Output: { name: "John" }

console.log(safeJsonParse('invalid json'));
// Output: "Invalid JSON format"

// Exercise 2

import fs from 'fs';

function readFileWithErrorHandling(fileName, callback) {
    fs.stat(fileName, (err, stats) => {
        if (err) {
            callback("File not found: " + fileName);
            return;
        }

        if (stats.isDirectory()) {
            callback("Error: " + fileName + " is a directory, not a file!");
            return;
        }

        fs.readFile(fileName, (readErr, data) => {
            if (readErr) {
                callback("Error reading file");
                return;
            }
            callback("File read successfully. Size: " + data.length + " bytes");
        });
    });
}

readFileWithErrorHandling('existing.txt', (result) => {
    console.log(result);
    // Success: "File read successfully. Size: 150 bytes"
    // Or error: "File not found: existing.txt"
});
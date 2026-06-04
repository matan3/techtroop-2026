// Exercise 1
class UniqueArray {

    constructor() {
        this.arr = []
        this.arrLen = 0
        this.itemsSet = new Set();
    }

    add(item) {
        if (!this.exists(item)) {
            this.arr[this.arrLen++] = item;
            this.itemsSet.add(item);
        }
    }

    exists = item => this.itemsSet.has(item);
    get = index => this.arr[index] === undefined ? -1 : this.arr[index];
    showAll = () => console.log(this.arr);
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
console.log(uniqueStuff.exists("toy")) //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"


// Exercise 2
class UniqueArray2 {

    constructor() {
        this.arr = []
        this.arrLen = 0
    }

    add(item) {
        if (!this.exists(item)) {
            this.arr[this.arrLen++] = item;
        }
    }

    exists = item => this.arr.some(i => JSON.stringify(i) === JSON.stringify(item));
    get = index => this.arr[index] === undefined ? -1 : this.arr[index];
    showAll = () => console.log(JSON.stringify(this.arr, null, 2));
}

const uniqueStuff2 = new UniqueArray2()
const myObject = { name: "myObject" };

uniqueStuff2.showAll()
uniqueStuff2.add(myObject)
uniqueStuff2.showAll()
uniqueStuff2.add(myObject)
uniqueStuff2.showAll()
uniqueStuff2.add(myObject)
uniqueStuff2.showAll()
uniqueStuff2.add("toy")
uniqueStuff2.showAll()
uniqueStuff2.add("toy")
uniqueStuff2.showAll()
console.log(uniqueStuff2.exists(myObject)) //returns true
console.log(uniqueStuff2.get(1)) 
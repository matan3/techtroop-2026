class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }

    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal;
            return;
        }
        if (newVal <= this.value) {
            if (this.leftChild) {
                this.leftChild.insertNode(newVal);
            } else {
                this.leftChild = new BSNode(newVal);
            }
        }
        else {
            if (this.rightChild) {
                this.rightChild.insertNode(newVal);
            } else {
                this.rightChild = new BSNode(newVal);
            }
        }
    }

    findNode(val) {
        if (this.value === val) return true;

        if (val < this.value) {
            if (this.leftChild) {
                return this.leftChild.findNode(val);
            } else {
                return false;
            }
        } else {
            if (this.rightChild) {
                return this.rightChild.findNode(val);
            } else {
                return false;
            }
        }
    }

    findCommonParent(val1, val2) {
        if (val1 > this.value && val2 > this.value) {
            if (this.rightChild) {
                return this.rightChild.findCommonParent(val1, val2);
            }
        }
        if (val1 < this.value && val2 < this.value) {
            if (this.leftChild) {
                return this.leftChild.findCommonParent(val1, val2);
            }
        }
        return this.value;
    }

    findMax(node) {
        if (!node) return null;
        let current = node;
        while (current && current.rightChild !== null && current.rightChild !== undefined) {
            current = current.rightChild;
        }
        return current ? current.value : null;
    }

    removeNode(node, value) {
        if (!node) return null;
        
        if (value < node.value) {
            node.leftChild = this.removeNode(node.leftChild, value);
            return node;
        }
        else if (value > node.value) {
            node.rightChild = this.removeNode(node.rightChild, value);
            return node;
        }

        else {
            if (node.leftChild === null && node.rightChild === null) {
                return null;
            }

            if (node.leftChild === null) {
                return node.rightChild;
            }

            if (node.rightChild === null) {
                return node.leftChild;
            }

            if (node.leftChild !== null && node.rightChild !== null) {
                const maxValue = this.findMax(node.leftChild);
                node.value = maxValue;
                node.leftChild = this.removeNode(node.leftChild, maxValue);
                return node;
            }
        }
    }

}



// Exercise 1
const letters = ["H", "E", "S", "G", "L", "Y", "I"]
let bSTree = new BSNode()
letters.forEach(l => bSTree.insertNode(l))
console.log(bSTree.findNode("H"));
console.log(bSTree.findNode("G"));
console.log(bSTree.findNode("Z"));
console.log(bSTree.findNode("F"));
console.log(bSTree.findNode("y"));

// Exercise 2
const letters2 = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]
let bSTree2 = new BSNode()
letters2.forEach(l => bSTree2.insertNode(l))

console.log(bSTree2.findCommonParent("B", "I")) //should return "H"
console.log(bSTree2.findCommonParent("B", "G"))//should return "E"
console.log(bSTree2.findCommonParent("B", "L")) //should return "J"
console.log(bSTree2.findCommonParent("L", "Y"))//should return "R"
console.log(bSTree2.findCommonParent("E", "H")) //should return "J"

// Exercise 3

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
nodeWithOneChild.removeNode(nodeWithOneChild, 9); // will return tree like the first image (the 9 will be deletied) 

let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8); // will return tree like the second image (the root will be 5) 

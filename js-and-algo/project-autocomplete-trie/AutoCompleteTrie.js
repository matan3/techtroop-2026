class TrieNode {
  constructor(char = '') {
    this.value = char;
    this.children = {};
    this.isEndOfWord = false;
  }
}

class AutoCompleteTrie {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let current = this.root;
    for (let letter of word) {
      if (!current.children[letter]) {
        current.children[letter] = new TrieNode(letter);
      }
      current = current.children[letter];
    }
    current.isEndOfWord = true;
  }

  findWord(word) {
    let current = this.root;
    for (let letter of word) {
      if (!current.children[letter]) {
        return false;
      }
      current = current.children[letter];
    }
    return current.isEndOfWord ? true : false;
  }

  getRemainingTree(prefix, node) {
    if (prefix.length === 0) {
      return node;
    }
    const firstLetter = prefix.at(0)
    if (!node.children[firstLetter]) {
      return null;
    }
    return this.getRemainingTree(prefix.slice(1), node.children[firstLetter]);
  }

  allWordsHelper(prefix, node, allWords) {
    if (node.isEndOfWord) {
      allWords.push(prefix);
    }
    for (let letter in node.children) {
      this.allWordsHelper(prefix + letter, node.children[letter], allWords);
    }
  }

  predictWords(prefix) {
    const node = this.getRemainingTree(prefix, this.root);
    const allWords = [];
    if (!node) {
      return allWords;
    }
    this.allWordsHelper(prefix, node, allWords);
    return allWords;
  }

}

export default AutoCompleteTrie;



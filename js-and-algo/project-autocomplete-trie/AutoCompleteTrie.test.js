import AutoCompleteTrie from './autoCompleteTrie.js';

describe('AutoCompleteTrie Tests', () => {

  beforeEach(() => {
    trie = new AutoCompleteTrie();
  });

  test('should initialize with an empty root', () => {
    expect(trie.root.value).toBe('');
    expect(trie.root.isEndOfWord).toBeFalsy();
  });

  test('should correctly insert words into the trie structure', () => {
    trie.addWord("run");
    trie.addWord("running");

    const rNode = trie.root.children['r'];
    const uNode = rNode.children['u'];
    const nNode = uNode.children['n'];

    expect(rNode).toBeDefined();
    expect(nNode.isEndOfWord).toBeTruthy();

    const nextNNode = nNode.children['n'];
    expect(nextNNode).toBeDefined();

    const gNode = nextNNode.children['i'].children['n'].children['g'];
    expect(gNode.isEndOfWord).toBeTruthy();
  });

  test('should correctly verify if a word exists in the trie', () => {
    trie.addWord("run");
    trie.addWord("running");

    expect(trie.findWord("run")).toBeTruthy();
    expect(trie.findWord("running")).toBeTruthy();
    expect(trie.findWord("run2")).toBeFalsy();
    expect(trie.findWord("aaa")).toBeFalsy();
  });

  test('should return the correct last node for a given prefix', () => {
    trie.addWord("run");
    trie.addWord("running");
    const nNode = trie.root.children['r'].children['u'].children['n'];
    const gNode = nNode.children['n'].children['i'].children['n'].children['g'];

    expect(trie.getRemainingTree("run", trie.root)).toBe(nNode);
    expect(trie.getRemainingTree("running", trie.root)).toBe(gNode);
    expect(trie.getRemainingTree("abc", trie.root)).toBeNull()
    expect(trie.getRemainingTree("runa", trie.root)).toBeNull()
  });

  test('should collect all words from the node into the array', () => {
    trie.addWord("run");
    trie.addWord("running");
    const allWords = [];

    trie.allWordsHelper("run", trie.root.children['r'].children['u'].children['n'], allWords);
    expect(allWords).toEqual(["run", "running"]);
  });

  test('should return all words matching the given prefix', () => {
    trie.addWord("run");
    trie.addWord("running");

    expect(trie.predictWords("ru")).toEqual(["run", "running"]);
    expect(trie.predictWords("xyz")).toEqual([]);
  });

   test('Full System Flow - should handle adding, searching, and predicting multiple words successfully', () => {
    const wordsInput = ["cat", "car", "cart", "dog", "apple", "banana"];
    wordsInput.forEach(word => trie.addWord(word));

    expect(trie.findWord("car")).toBeTruthy();
    expect(trie.findWord("cart")).toBeTruthy();
    expect(trie.findWord("care")).toBeFalsy(); 
    expect(trie.findWord("ca")).toBeFalsy(); 

    expect(trie.predictWords("ca")).toEqual(["cat", "car", "cart"]); 
    expect(trie.predictWords("cart")).toEqual(["cart"]);             
    expect(trie.predictWords("d")).toEqual(["dog"]);                 
    expect(trie.predictWords("xyz")).toEqual([]);            
  });

});
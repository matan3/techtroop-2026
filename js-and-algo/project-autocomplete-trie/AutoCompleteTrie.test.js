import AutoCompleteTrie from './autoCompleteTrie.js';

describe('AutoCompleteTrie Tests', () => {

  beforeEach(() => {
    trie = new AutoCompleteTrie();
  });

  test('should initialize with an empty root', () => {
    expect(trie.root.value).toBe('');
    expect(trie.root.isEndOfWord).toBeFalsy();
    expect(trie.root.frequency).toBe(0);
  });

  test('should correctly insert words into the trie structure', () => {
    trie.addWord("run");
    trie.addWord("running");

    const rNode = trie.root.children['r'];
    const uNode = rNode.children['u'];
    const nNode = uNode.children['n'];

    expect(rNode).toBeDefined();
    expect(nNode.isEndOfWord).toBeTruthy();
    expect(nNode.frequency).toBe(0);

    const nextNNode = nNode.children['n'];
    expect(nextNNode).toBeDefined();

    const gNode = nextNNode.children['i'].children['n'].children['g'];
    expect(gNode.isEndOfWord).toBeTruthy();
    expect(nNode.frequency).toBe(0);
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

  test('should collect all words from the node into the array with frequency', () => {
    trie.addWord("run");
    trie.addWord("running");
    const allWords = [];

    trie.allWordsHelper("run", trie.root.children['r'].children['u'].children['n'], allWords);
    expect(allWords).toEqual([
      { word: "run", freq: 0 },
      { word: "running", freq: 0 }
    ]);
  });

  test('should return all words matching the given prefix sorted by frequency', () => {
    trie.addWord("run");
    trie.addWord("running");

    expect(trie.predictWords("ru")).toEqual([
      { word: "run", freq: 0 },
      { word: "running", freq: 0 }
    ]);
    expect(trie.predictWords("xyz")).toEqual([]);
  });

  test('should correctly handle the use command and update frequency', () => {
    trie.addWord("cat");
    trie.addWord("car");

    expect(trie.use("cat")).toBe(1);
    expect(trie.use("cat")).toBe(2);
    expect(trie.use("car")).toBe(1);
    expect(trie.use("dog")).toBeFalsy();

    trie.addWord("cards");
    expect(trie.use("card")).toBeFalsy();
  });

  test('should sort predictions dynamically based on word frequency', () => {
    trie.addWord("car");
    trie.addWord("cat");
    trie.addWord("cart");

    trie.use("cart");
    trie.use("cart");
    trie.use("cat");

    const predictions = trie.predictWords("ca");

    expect(predictions[0].word).toBe("cart");
    expect(predictions[0].freq).toBe(2);
    expect(predictions[1].word).toBe("cat");
    expect(predictions[1].freq).toBe(1);
    expect(predictions[2].word).toBe("car");
    expect(predictions[2].freq).toBe(0);
  });

  test('Full System Flow - should handle adding, searching, and predicting multiple words successfully', () => {
    const wordsInput = ["cat", "car", "cart", "dog", "apple", "banana"];
    wordsInput.forEach(word => trie.addWord(word));

    expect(trie.findWord("car")).toBeTruthy();
    expect(trie.findWord("cart")).toBeTruthy();
    expect(trie.findWord("care")).toBeFalsy();
    expect(trie.findWord("ca")).toBeFalsy();

    trie.use("car");
    trie.use("cart");
    trie.use("cart");

    expect(trie.predictWords("ca")).toEqual([
      { word: "cart", freq: 2 },
      { word: "car", freq: 1 },
      { word: "cat", freq: 0 }
    ]);
    expect(trie.predictWords("cart")).toEqual([{ word: "cart", freq: 2 }]);             
    expect(trie.predictWords("d")).toEqual([{ word: "dog", freq: 0 }]);                 
    expect(trie.predictWords("xyz")).toEqual([]);  
  });

});
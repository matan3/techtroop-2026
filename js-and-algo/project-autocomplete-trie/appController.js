import AutoCompleteTrie from './autoCompleteTrie.js';
import AutocompleteUI from './autoCompleteUi.js'

class AppController {
    constructor() {
        this.trie = new AutoCompleteTrie();
        this.ui = new AutocompleteUI();
        this.wordCount = 0;
    }

    run() {
        const btnAdd = document.getElementById('btnAdd');
        const wordInput = document.getElementById('wordInput');
        const wordSuggestions = document.getElementById('wordSuggestions');

        btnAdd.addEventListener('click', () => this.handleCommand('add', wordInput.value))
        wordSuggestions.addEventListener('input', (e) => {
            const prefix = e.target.value;
            this.handleCommand('complete', prefix);
        });
        this.ui.updateWordCount(this.wordCount);
    }

    handleCommand(command, arg) {

        switch (command) {

            case 'add':
                if (!arg) {
                    this.ui.displayError("Cannot add empty word");
                } else if (!/^[a-zA-Z]+$/.test(arg)) {
                    this.ui.displayError("Please enter letters only.");
                } else {
                    this.trie.addWord(arg);
                    this.ui.displayAddSuccess(arg);
                    this.wordCount++;
                    this.ui.updateWordCount(this.wordCount);
                    this.ui.input.value = '';
                }
                break;

            case 'complete':
                if (!arg) {
                    this.ui.displayError("Missing prefix. Usage: complete <prefix>");
                } else {
                    const suggestions = this.trie.predictWords(arg);
                    this.ui.displaySuggestions(arg, suggestions, (selectedWord) => {
                        this.handleCommand('use', selectedWord);
                    });
                }
                break;

            case 'use':
                if (!arg) {
                    this.ui.displayError("Missing word. Usage: use <word>");
                } else {
                    const newCount = this.trie.use(arg);
                    if (newCount === false) {
                        this.ui.displayError(`'${arg}' not found in dictionary`);
                    } else {
                        this.ui.displayUseSuccess(arg, newCount);
                        const wordSuggestions = document.getElementById('wordSuggestions');
                        if (wordSuggestions) wordSuggestions.value = '';
                    }
                }
                break;

        }
    }
}
export default AppController;
import AutoCompleteTrie from './autoCompleteTrie.js';
import AutocompleteUI from './autoCompleteUi.js'

class AppController {
    constructor() {
        this.trie = new AutoCompleteTrie();
        this.ui = new AutocompleteUI();
    }

    async run() {
        this.ui.displayWelcome();

        while (true) {

            const userInput = await this.ui.getUserInput();
            if (!userInput) {
                this.ui.displayError("Input cannot be empty.");
                continue;
            }

            const parts = userInput.split(/\s+/);
            const command = parts[0].toLowerCase();
            const arg = parts[1];

            switch (command) {

                case 'add':
                    if (!arg) {
                        this.ui.displayError("Missing word. Usage: add <word>");
                    } else if (!/^[a-zA-Z]+$/.test(arg)) {
                        this.ui.displayError("Please enter letters only.");
                    } else {
                        this.trie.addWord(arg);
                        this.ui.displayAddSuccess(arg);
                    }
                    break;

                case 'find':
                    if (!arg) {
                        this.ui.displayError("Missing word. Usage: find <word>");
                    } else {
                        const exists = this.trie.findWord(arg);
                        this.ui.displayFindResult(arg, exists);
                    }
                    break;

                case 'complete':
                    if (!arg) {
                        this.ui.displayError("Missing prefix. Usage: complete <prefix>");
                    } else {
                        const suggestions = this.trie.predictWords(arg);
                        this.ui.displaySuggestions(arg, suggestions);
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
                        }
                    }
                    break;

                case 'help':
                    this.ui.displayHelp();
                    break;

                case 'exit':
                    this.ui.displayGoodbye();
                    this.ui.close();
                    return;

                default:
                    this.ui.displayError(`Unknown command '${command}'. Type 'help' for commands.`);
                    break;
            }

        }
    }
}
export default AppController;
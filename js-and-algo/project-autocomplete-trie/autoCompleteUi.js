import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

class AutocompleteUI {
    constructor() {
        this.rl = readline.createInterface({ input, output });
    }

    displayWelcome() {
        console.log("=== AutoComplete Trie Console ===");
        console.log("Type 'help' for commands");
    }

    async getUserInput() {
        const answer = await this.rl.question("> ");
        return answer.trim();
    }

    displayAddSuccess(word) {
        console.log(`✓ Added '${word}' to dictionary\n`);
    }

    displayFindResult(word, exists) {
        if (exists) {
            console.log(`✓ '${word}' exists in dictionary\n`);
        } else {
            console.log(`✗ '${word}' not found in dictionary\n`);
        }
    }

    displaySuggestions(prefix, suggestions) {
        if (!suggestions || suggestions.length === 0) {
            console.log(`Suggestions for '${prefix}': None\n`);
            return;
        }
        const formatted = suggestions
            .map(item => `${item.word} (${item.freq})`)
            .join(', ');
        console.log(`Suggestions for '${prefix}': ${formatted}\n`);
    }

    displayUseSuccess(word, newCount) {
        console.log(`✓ Incremented usage for '${word}' (now ${newCount})\n`);
    }

    displayHelp() {
        console.log("Commands:");
        console.log("  add <word>      - Add word to dictionary");
        console.log("  find <word>     - Check if word exists");
        console.log("  complete <prefix> - Get completions");
        console.log("  help           - Show this message");
        console.log("  exit           - Quit program\n");
    }

    displayError(message) {
        console.log(`⚠️ Error: ${message}\n`);
    }

    displayGoodbye() {
        console.log("Goodbye!");
    }

    close() {
        this.rl.close();
    }
}

export default AutocompleteUI;
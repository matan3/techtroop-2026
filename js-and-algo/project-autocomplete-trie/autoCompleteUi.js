
class AutocompleteUI {
    constructor() {
        this.input = document.getElementById('wordInput');
        this.outputDiv = document.getElementById('output');
        this.wordCountDiv = document.getElementById('wordCountDisplay');
    }

    print(message) {
        this.outputDiv.textContent = message;
        this.outputDiv.className = '';
        this.outputDiv.style.display = '';
        if (!message || message.trim() === '') {
            this.outputDiv.style.display = 'none';
            return;
        }

        if (message.includes('✗')) {
            this.outputDiv.classList.add('error');
        } else if (message.includes('✓')) {
            this.outputDiv.classList.add('success');
        } else {
            this.outputDiv.style.display = 'block';
        }
    }

    displayAddSuccess(word) {
        this.print(`✓ Added '${word}' to dictionary\n`);
    }

    displaySuggestions(prefix, suggestions, onTypeClick) {
        this.outputDiv.innerHTML = '';
        this.outputDiv.className = '';
        this.outputDiv.style.display = '';
        if (!suggestions || suggestions.length === 0) {
            this.print(`Suggestions for '${prefix}': None\n`);
            return;
        }
        this.outputDiv.classList.add('suggestions-open');

        suggestions.forEach(item => {
            const word = item.word;
            const div = document.createElement('div');
            div.className = 'suggestion-item';

            if (word.toLowerCase().startsWith(prefix.toLowerCase())) {
                const prefixLength = prefix.length;
                const highlightedPart = word.slice(0, prefixLength);
                const restPart = word.slice(prefixLength);
                div.innerHTML = `<span class="highlight">${highlightedPart}</span>${restPart}`;
            } else {
                div.textContent = word;
            }
            div.addEventListener('click', () => {
                if (onTypeClick) {
                    onTypeClick(word);
                }
            });
            this.outputDiv.appendChild(div);
        });
    }

    displayUseSuccess(word, newCount) {
        this.print(`✓ Incremented usage for '${word}' (now ${newCount})\n`);
    }

    displayError(message) {
        this.print(`✗ ${message}\n`);
    }

    updateWordCount(count) {
        if (this.wordCountDiv) {
            this.wordCountDiv.innerHTML = `
                <span class="count-number">${count}</span>
                <span class="count-label">Words in Dictionary</span>
            `;
        }
    }
}

export default AutocompleteUI;
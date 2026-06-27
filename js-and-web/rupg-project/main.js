import model from './model.js';
import renderer from './render.js';

const generateBtn = document.getElementById('generate-btn');
const saveBtn = document.getElementById('save-btn');
const loadBtn = document.getElementById('load-btn');
const savedUsersDropdown = document.getElementById('saved-users-dropdown');
const errorMessage = document.getElementById('error-message');

async function loadAndRenderPage() {
    try {

        errorMessage.innerText = '';
        errorMessage.className = 'hidden';

        generateBtn.innerText = 'Loading...';
        generateBtn.disabled = true;

        await Promise.all([
            model.fetchUsers(),
            model.fetchQuote(),
            model.fetchPokemon(),
            model.fetchAboutMe()
        ]);

        renderer.renderAll(model.data);

    } catch (error) {
        console.error('Controller Error:', error);
        errorMessage.innerText = 'Failed to load user data. Please try again.';
        errorMessage.className = 'error-visible';

    } finally {
        generateBtn.innerText = 'Generate User';
        generateBtn.disabled = false;
    }
}

generateBtn.addEventListener('click', loadAndRenderPage);

saveBtn.addEventListener('click', () => {
    if (!model.data.mainUser) {
        alert('Please generate a user first before saving!');
        return;
    }
    model.saveCurrentPage();
    renderer.renderDropdown(model.savedUsers);
    alert('User page saved successfully!');
});


loadBtn.addEventListener('click', (event) => {
    const selectedName = savedUsersDropdown.value;

    if (!selectedName) {
        alert('Please select a user from the dropdown menu first!');
        return;
    }
    const savedData = model.loadSavedPage(selectedName);
    if (savedData) {
        renderer.renderAll(savedData);
    }
});

model.initStorage();
renderer.renderDropdown(model.savedUsers);
loadAndRenderPage();

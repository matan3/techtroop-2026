import model from './model.js';
import renderer from './render.js';

const generateBtn = document.getElementById('generate-btn');
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

loadAndRenderPage();

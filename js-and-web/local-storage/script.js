
let wisdom = JSON.parse(localStorage.getItem('wisdom')) || [];

const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
const clrBtn = document.getElementById('clrBtn');
const displayArea = document.getElementById('displayArea');

wisdom.forEach(function (item) {
    const paragraph = document.createElement('p');
    paragraph.textContent = item.text;
    displayArea.appendChild(paragraph);
});

function addDeleteButton(paragraph, item) {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';

    deleteBtn.addEventListener('click', function () {
        wisdom = wisdom.filter(w => w.id !== item.id);
        localStorage.setItem('wisdom', JSON.stringify(wisdom));
        paragraph.remove();
    });

    paragraph.appendChild(deleteBtn);
}

submitBtn.addEventListener('click', function () {

    const value = userInput.value;
    const newItem = { id: Date.now(), text: value };
    wisdom.push(newItem);

    const paragraph = document.createElement('p');
    paragraph.textContent = value + " ";
    
    addDeleteButton(paragraph, newItem);
    displayArea.appendChild(paragraph);

    if (wisdom.length % 2 === 0) {
        localStorage.setItem('wisdom', JSON.stringify(wisdom));
    }

});

clrBtn.addEventListener('click', function () {

    localStorage.removeItem('wisdom');
    wisdom = [];
    displayArea.innerHTML = '';

});
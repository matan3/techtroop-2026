const container = document.getElementById('container');

const message = document.createElement('p');
message.setAttribute('id', 'result-message');
document.body.appendChild(message); 

for (let i = 0; i < 3; i++) {
    let newBox = document.createElement('div');
    newBox.setAttribute("class", "box")
    container.appendChild(newBox);
    newBox.onmouseenter = function () {
        newBox.style.backgroundColor = getRandomColor();
        checkBoxColors();
    };
}

function checkBoxColors() {
    const allBoxes = document.querySelectorAll('.box');
    const firstColor = allBoxes[0].style.backgroundColor; 
    const allSame = Array.from(allBoxes).every(box => box.style.backgroundColor === firstColor);

    if (allSame) {
        message.textContent = "Nice job!";
    } else {
        message.textContent = "";
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// function getRandomColor() { // test for checkBoxColors
//     return 'rgb(255, 0, 0)'; 
// }
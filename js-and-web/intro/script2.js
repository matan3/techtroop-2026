const checkReservationBtn = document.getElementById('checkReservationBtn');
const inputField = document.getElementById('checkReservationInput');

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

checkReservationBtn.addEventListener('click', () => {
    const itemText = inputField.value.trim();
    if (!reservations[itemText]) {
        console.log("You have no reservation");
    } else if (reservations[itemText].claimed) {
        console.log("Hmm, someone already claimed this reservation");
    } else {
        console.log(`Welcome, ${itemText}`);
    }
});
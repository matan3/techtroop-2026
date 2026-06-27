const renderer = {
    renderMainUser: function (mainUser) {
        const container = document.getElementById('main-user-container');
        container.innerHTML = `
            <img src="${mainUser.picture}" alt="${mainUser.firstName}">
            <div class="user-details">
                <h2>${mainUser.firstName} ${mainUser.lastName}</h2>
                <p>${mainUser.city}, ${mainUser.state}</p>
            </div>
        `;
    },

    renderFriends: function (friends) {
        const container = document.getElementById('friends-list');
        container.innerHTML = friends.map(friend => `
            <li>${friend.firstName} ${friend.lastName}</li>
        `).join('');
    },

    renderQuote: function (quote) {
        const container = document.getElementById('quote-container');
        container.innerHTML = `
            <p class="quote-text">"${quote}"</p>
            <p class="quote-author">- Kanye West</p>
        `;
    },

    renderPokemon: function (pokemon) {
        const container = document.getElementById('pokemon-container');
        container.innerHTML = `
            <img src="${pokemon.image}" alt="${pokemon.name}">
            <p>Favorite Pokemon: ${pokemon.name}</p>
        `;
    },

    renderAboutMe: function (text) {
        document.getElementById('about-me-text').innerText = text;
    },

    renderAll: function (data) {
        this.renderMainUser(data.mainUser);
        this.renderFriends(data.friends);
        this.renderQuote(data.quote);
        this.renderPokemon(data.pokemon);
        this.renderAboutMe(data.aboutMe);
    },

    renderDropdown: function (savedUsersObject) {
        const dropdown = document.getElementById('saved-users-dropdown');
        dropdown.innerHTML = '<option value="">-- Load Saved User --</option>';
        const savedNames = Object.keys(savedUsersObject);
        savedNames.forEach(name => {
            dropdown.innerHTML += `<option value="${name}">${name}</option>`;
        });
    }
};

export default renderer;

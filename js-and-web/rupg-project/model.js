const model = {

    data: {
        mainUser: null,
        friends: [],
        quote: "",
        pokemon: null,
        aboutMe: ""
    },

    capitalize: function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },

    fetchUsers: async function () {
        try {
            const response = await fetch('https://randomuser.me/api/?results=7');
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const data = await response.json();

            const allUsers = data.results;
            const mainUserRaw = allUsers[0];

            this.data.mainUser = {
                firstName: mainUserRaw.name.first,
                lastName: mainUserRaw.name.last,
                city: mainUserRaw.location.city,
                state: mainUserRaw.location.state,
                picture: mainUserRaw.picture.large
            };

            this.data.friends = allUsers.slice(1).map(user => ({
                firstName: user.name.first,
                lastName: user.name.last
            }));

            console.log('--- Main User ---', this.data.mainUser);
            console.log('--- Friends ---', this.data.friends);

        } catch (error) {
            console.error('Error fetching users:', error.message);
            throw error;
        }
    },

    fetchQuote: async function () {
        try {
            const response = await fetch('https://api.kanye.rest/');
            if (!response.ok) throw new Error('Failed to fetch quote');
            const data = await response.json();

            this.data.quote = data.quote;
            console.log('--- quote ---', this.data.quote);
        } catch (error) {
            console.error('Error fetching quote:', error.message);
            throw error;
        }
    },

    fetchPokemon: async function () {
        const randomId = Math.floor(Math.random() * 1025) + 1;
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
            if (!response.ok) throw new Error('Failed to fetch Pokemon');
            const data = await response.json();

            this.data.pokemon = {
                name: this.capitalize(data.name),
                image: data.sprites.front_default
            };

            console.log('--- pokemonName ---', this.data.pokemon.name);
            console.log('--- pokemonImage ---', this.data.pokemon.image);

        } catch (error) {
            console.error('Error fetching pokemon:', error.message);
            throw error;
        }
    },

    fetchAboutMe: async function () {
        try {
            const response = await fetch(`https://baconipsum.com/api/?type=meat-and-filler`);
            if (!response.ok) throw new Error('Failed to fetch text');
            const data = await response.json();

            this.data.aboutMe = data[0];
            console.log('--- text ---', this.data.aboutMe);

        } catch (error) {
            console.error('Error fetching text:', error.message);
            throw error;
        }
    }
};

export default model;
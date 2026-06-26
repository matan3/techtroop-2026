async function getRandomUsers() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=7');

        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        const allUsers = data.results;

        const mainUserRaw = allUsers[0];
        const mainUser = {
            firstName: mainUserRaw.name.first,
            lastName: mainUserRaw.name.last,
            city: mainUserRaw.location.city,
            state: mainUserRaw.location.state,
            picture: mainUserRaw.picture.large
        };

        const friends = allUsers.slice(1).map(user => ({
            firstName: user.name.first,
            lastName: user.name.last
        }));

        console.log('--- Main User ---', mainUser);
        console.log('--- Friends ---', friends);

        return { mainUser, friends };

    } catch (error) {
        console.error('Error fetching users:', error.message);
        return null;
    }
}

async function getRandomQuote() {
    try {
        const response = await fetch('https://api.kanye.rest/');
        if (!response.ok) {
            throw new Error('Failed to fetch quote');
        }

        const data = await response.json();
        const quote = data.quote;
        console.log('--- quote ---', quote);
        return { quote };

    } catch (error) {
        console.error('Error fetching quote:', error.message);
        return null;
    }
}

async function getRandomPoke() {
    const randomId = Math.floor(Math.random() * 1025) + 1;
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch Pokemon');
        }

        const data = await response.json();

        const pokemonName = data.name;
        const pokemonImage = data.sprites.front_default;

        console.log('--- pokemonName ---', pokemonName);
        console.log('--- pokemonImage ---', pokemonImage);

        return { pokemonName, pokemonImage };

    } catch (error) {
        console.error('Error fetching pokemon:', error.message);
        return null;
    }
}

async function getRandomIpsum() {
    try {
        const response = await fetch(`https://baconipsum.com/api/?type=meat-and-filler`);
        if (!response.ok) {
            throw new Error('Failed to fetch text');
        }

        const data = await response.json();
        const text = data[0];
        console.log('--- text ---', text);
        return { text };

    } catch (error) {
        console.error('Error fetching text:', error.message);
        return null;
    }
}


getRandomUsers();
getRandomQuote();
getRandomPoke();
getRandomIpsum();
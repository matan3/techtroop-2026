const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:@localhost/sql_intro');

async function getHeaviestPokemon() {
    const query = `
        SELECT id, name, weight 
        FROM pokemon 
        WHERE weight = (SELECT MAX(weight) FROM pokemon);
    `;

    try {
        const [results] = await sequelize.query(query);
        return results[0];
    } catch (error) {
        console.error('Error fetching heaviest pokemon:', error);
        throw error;
    }
}

async function findByType(pokemonType) {
    const query = `
        SELECT name 
        FROM pokemon 
        WHERE type = :type;
    `;

    try {
        const [results] = await sequelize.query(query, {
            replacements: { type: pokemonType }
        });
        return results.map(row => row.name);
    } catch (error) {
        console.error(`Error fetching pokemon by type ${pokemonType}:`, error);
        throw error;
    }
}

async function findOwners(pokemonName) {
    const query = `
        SELECT DISTINCT t.name
        FROM trainer t
        JOIN pokemon_trainer pt ON t.id = pt.trainer_id
        JOIN pokemon p ON pt.pokemon_id = p.id
        WHERE p.name = :pokemonName;
    `;

    try {
        const [results] = await sequelize.query(query, {
            replacements: { pokemonName: pokemonName }
        });
        
        return results.map(row => row.name);
    } catch (error) {
        console.error(`Error finding owners for ${pokemonName}:`, error);
        throw error;
    }
}

async function findRoster(trainerName) {
    const query = `
        SELECT DISTINCT p.name
        FROM pokemon p
        JOIN pokemon_trainer pt ON p.id = pt.pokemon_id
        JOIN trainer t ON pt.trainer_id = t.id
        WHERE t.name = :trainerName;
    `;

    try {
        const [results] = await sequelize.query(query, {
            replacements: { trainerName: trainerName }
        });
        
        return results.map(row => row.name);
    } catch (error) {
        console.error(`Error finding roster for trainer ${trainerName}:`, error);
        throw error;
    }
}

async function getMostOwnedPokemon() {
    const query = `
        SELECT p.name, COUNT(pt.trainer_id) AS owners_count
        FROM pokemon p
        JOIN pokemon_trainer pt ON p.id = pt.pokemon_id
        GROUP BY p.id, p.name
        HAVING owners_count = (
            SELECT COUNT(trainer_id) AS max_count
            FROM pokemon_trainer
            GROUP BY pokemon_id
            ORDER BY max_count DESC
            LIMIT 1
        );
    `;

    try {
        const [results] = await sequelize.query(query);
        return results;
    } catch (error) {
        console.error('Error finding most owned pokemon:', error);
        throw error;
    }
}

async function run() {
    try {
        await sequelize.authenticate();

        const heaviest = await getHeaviestPokemon();
        console.log('\n--- Exercise 2 Result ---');
        console.log(`The heaviest pokemon is: ${heaviest.name} with a weight of ${heaviest.weight}!`);

        const grassPokemons = await findByType('grass');
        console.log('\n--- Exercise 3 Result (Grass Type) ---');
        console.log(grassPokemons);

        const ownersOfGengar = await findOwners('gengar');
        console.log('\n--- Exercise 4 Result (Owners of Gengar) ---');
        console.log(ownersOfGengar);

        const logasPokemon = await findRoster('Loga');
        console.log('\n--- Exercise 5 Result (Roster of Loga) ---');
        console.log(logasPokemon);

        const topPokemon = await getMostOwnedPokemon();
        console.log('\n--- Exercise 6 Result (Most Owned Pokemon) ---');
        console.table(topPokemon); 

    } catch (err) {
        console.error(err);
    } finally {
        await sequelize.close();
    }
}

run();

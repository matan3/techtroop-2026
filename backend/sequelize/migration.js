const Sequelize = require('sequelize');
const fs = require('fs');

const sequelize = new Sequelize('mysql://root:@localhost/sql_intro', { logging: false });

async function runMigration() {
    try {
        await sequelize.authenticate();
        console.log('Connected to DB for migration.');

        const rawData = fs.readFileSync('poke_data.json');
        const pokemons = JSON.parse(rawData);

        for (const poke of pokemons) {
            await sequelize.query(
                `INSERT IGNORE INTO pokemon (id, name, type, height, weight) 
                 VALUES (:id, :name, :type, :height, :weight)`,
                { replacements: { id: poke.id, name: poke.name, type: poke.type, height: poke.height, weight: poke.weight } }
            );

            if (poke.ownedBy && poke.ownedBy.length > 0) {
                for (const trainer of poke.ownedBy) {
                    
                    await sequelize.query(
                        `INSERT IGNORE INTO town (name) VALUES (:townName)`,
                        { replacements: { townName: trainer.town } }
                    );

                    const [townResult] = await sequelize.query(
                        `SELECT id FROM town WHERE name = :townName`,
                        { replacements: { townName: trainer.town } }
                    );
                    const townId = townResult[0].id;

                    await sequelize.query(
                        `INSERT IGNORE INTO trainer (name, town_id) VALUES (:trainerName, :townId)`,
                        { replacements: { trainerName: trainer.name, townId: townId } }
                    );

                    const [trainerResult] = await sequelize.query(
                        `SELECT id FROM trainer WHERE name = :trainerName`,
                        { replacements: { trainerName: trainer.name } }
                    );
                    const trainerId = trainerResult[0].id;

                    await sequelize.query(
                        `INSERT IGNORE INTO pokemon_trainer (pokemon_id, trainer_id) VALUES (:pokeId, :trainerId)`,
                        { replacements: { pokeId: poke.id, trainerId: trainerId } }
                    );
                }
            }
        }

        console.log('Migration completed successfully!');

    } catch (error) {
        console.error('Migration failed:', error);
    } finally {
        await sequelize.close();
    }
}

runMigration();

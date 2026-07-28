CREATE TABLE town (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE trainer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    town_id INT,
    FOREIGN KEY (town_id) REFERENCES town(id) ON DELETE SET NULL
);

CREATE TABLE pokemon (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    height INT,
    weight INT
);

CREATE TABLE pokemon_trainer (
    pokemon_id INT,
    trainer_id INT,
    PRIMARY KEY (pokemon_id, trainer_id),
    FOREIGN KEY (pokemon_id) REFERENCES pokemon(id) ON DELETE CASCADE,
    FOREIGN KEY (trainer_id) REFERENCES trainer(id) ON DELETE CASCADE
);

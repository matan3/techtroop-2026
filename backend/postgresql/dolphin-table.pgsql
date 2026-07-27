CREATE TABLE Dolphin (
    name VARCHAR(50) PRIMARY KEY,
    color VARCHAR(30),
    height SMALLINT,
    healthy BOOLEAN DEFAULT true
);

INSERT INTO Dolphin (name, color, height, healthy) VALUES
('Daron', 'Grey', 3, true),
('Flip', 'Blue', 1, true),
('Splash', 'Blue', 1, false),
('BigBlue', 'Blue', 4, true),
('Echo', 'Green', 2, true);

INSERT INTO Dolphin (color, height) VALUES ('Grey', 2);
-- null value in column "name" of relation "dolphin" violates not-null constraint

SELECT * FROM Dolphin WHERE height > 2;

DELETE FROM Dolphin 
WHERE color = 'Blue' AND height < 2;

UPDATE Dolphin 
SET height = 6 
WHERE name = 'Daron';

UPDATE Dolphin 
SET healthy = false
WHERE color = 'Green' OR color = 'Blue';

SELECT name, height 
FROM Dolphin 
WHERE healthy = true 
ORDER BY height DESC;

SELECT * FROM Dolphin;

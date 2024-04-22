CREATE TABLE IF NOT EXISTS participants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

INSERT INTO participants (name) VALUES ('John Doe');
INSERT INTO participants (name) VALUES ('Jane Smith');
INSERT INTO participants (name) VALUES ('Alice Johnson');

SELECT DISTINCT name FROM participants;
SELECT name FROM participants WHERE name LIKE '%A%';


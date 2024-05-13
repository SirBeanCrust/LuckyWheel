import sqlite3 from 'sqlite3';

// Open a connection to the SQLite database file
const db = new sqlite3.Database('firstdatabase.sqlite');

// Define the SQL query
const sql = 'SELECT name FROM participants LIMIT 1';

// Execute the query
db.get(sql, (err, row) => {
    if (err) {
        console.error(err.message);
        return;
    }
    // Save the result in a variable
    const firstParticipantName = row.name;
    console.log('First participant:', firstParticipantName);

    // Close the database connection
    db.close();
});

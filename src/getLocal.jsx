import sqlite3 from 'sqlite3';

export default function MyComponent4() {
const db = new sqlite3.Database('firstdatabase.sqlite');

const sql = 'SELECT name FROM participants LIMIT 1';

    const [data, setData] = useState(0);

    db.get(sql, (err, row) => {
        if (err) {
            console.error(err.message);
            return;
        }
        setData() = row.name;
    console.log('First participant:', data);

    // Close the database connection
    db.close();})
   
    return(
      <>{data}</>
    ) 
}
const mysql = require('mysql2/promise');

const connectDB = async () => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'learnenglish',
            password:'01653050442hhQ@'
        });

        console.log('Connected to the database.');
        return connection;
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error; // Re-throw the error to handle it where this function is called.
    }
};

export default connectDB;

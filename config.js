import mysql from 'mysql2/promise';

const getConnection = async () => {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        database: process.env.DB_NAME ||'gymtech',
        port : process.env.DB_PORT || 3306,
        password: process.env.DB_USER_PASSWORD || ''
    });
    return connection;
};

export default getConnection;

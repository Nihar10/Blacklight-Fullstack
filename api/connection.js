const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.HOST,
    port: '3306',
    user: 'admin',
    password:process.env.PASSWORD,
    database: 'blacklight',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to Db:', err.stack);
        return;
    }
    console.log('Connection established');
});

module.exports = connection;

 

 
   

     


 

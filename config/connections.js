const mysql = require("mysql");

const connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL||{
    host:"localhost",
    port:3306,
    user:"root",
    password:"password",
    database:"gladiator_db"
});

module.exports = connection
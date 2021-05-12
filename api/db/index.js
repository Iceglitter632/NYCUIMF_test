const mysql = require("mysql");

mysql.createPool({
    connectionLimit: 10,
    password:  "nctuimf",
    user: "imf",
    host: "localhost",
    port: "3306"
});

let db = {};

db.all() = () => {

};
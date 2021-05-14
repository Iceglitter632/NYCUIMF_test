const mysql = require("mysql2");

const pool = mysql.createPool({
    connectionLimit: 10,
    password:  "imfnctu",
    user: "imf",
    host: "localhost",
    database: "imfexams",
    port: "3306"
});


let db = {};

db.all = () => {
    return new Promise((resolve, reject)=>{
        pool.query(`SELECT * FROM courses`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = db;
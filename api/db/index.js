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

db.all = (request) => {
    console.log(request);
    return new Promise((resolve, reject)=>{
        pool.query(`SELECT * FROM courses WHERE course = "微積分(甲)"`,
        (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = db;
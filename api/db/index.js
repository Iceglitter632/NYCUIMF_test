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

db.all = (req, res) => {
    // var course = req.params.course;
    const course = req.query[0];
    console.log(req.query);
    return new Promise((resolve, reject)=>{
        pool.query(`SELECT * FROM courses WHERE course = "${course}"`,
        (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = db;
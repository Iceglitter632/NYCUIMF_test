const mysql = require("mysql2");
const sha256 = require("crypto-js/sha256");
const { reject } = require("lodash");

const pool = mysql.createPool({
    connectionLimit: 10,
    password:  "imfnctu",
    user: "imf",
    host: "localhost",
    database: "imfexams",
    port: "3306"
});


let db = {};

db.all = (req) => {
    // var course = req.params.course;
    const course = req.query[0];
    return new Promise((resolve, reject)=>{
        pool.query(
            `SELECT * FROM courses WHERE course = ? ORDER BY year DESC`, 
            course,
        (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

db.getcourses = (id) => {
    return new Promise((resolve, reject)=>{
        pool.query(`SELECT coursename FROM grades WHERE grade = ?`, id,
        (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

db.getallcourses = () => {
    return new Promise((resolve, reject)=>{
        pool.query("SELECT coursename FROM grades",
        (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

db.getallteachers = () => {
    return new Promise((resolve, reject)=>{
        pool.query("SELECT DISTINCT teacher FROM courses",
        (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

db.upload = (body, filename) => {
    let year = body.year;
    let type = body.type;
    let course = body.course;
    let teacher = body.teacher;
    let grade = body.grade;
    let code = course+year+type+teacher+filename;
    let id = sha256(code).toString();
    pool.query(
        `INSERT INTO courses VALUES(?,?,?,?,?,?,?,?)`,
        [id, year, course, teacher, type, filename, grade, '0'],
        (err, result) =>{
            if(err) console.log(err);
        }
    );
    // pool.query(
    //     `INSERT INTO teachers (teacher)
    //     SELECT DISTINCT teacher
    //     FROM courses
    //     WHERE teacher NOT IN (SELECT teacher FROM teachers)`,
    //     (err, result) => {
    //         if(err) console.log(err);
    //     }
    // )
    return id;
}

db.getfilename = (id) => {
    console.log(id);
    return new Promise((resolve, reject)=>{
        pool.query(`SELECT filename FROM courses WHERE id = ?`, id,
        (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = db;
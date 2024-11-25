import mysql from 'mysql';
import dotenv from 'dotenv'

dotenv.config
const connection = mysql.createPool({
    host : process.env.HOST,
    user : "root",
    database : "etudiants",
    password : process.env.PASSWORD,
    port : 3306,
    connectionLimit : 10
})

export {
    connection
}
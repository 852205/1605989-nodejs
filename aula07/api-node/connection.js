import mysql from 'mysql'

export const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    passaword: '',
    database: 'EMPRESA'
})

export default con
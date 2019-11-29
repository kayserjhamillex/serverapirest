const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'jhamil',
    password:  'jhamillex',
    database: 'clinica'
})

let userModel = {};

userModel.getUsers = (callback) =>{
    if (connection) {
        connection.query(
            'select * from paciente order by id',
            (err,rows)=>{
                if (err) {
                    throw err;
                }
                else{
                    callback(null, rows);
                }
            }) 
    }
}

userModel.insertPaciente = (cliente, callback)=>{
    if (connection) {
        connection.query(
            'insert into paciente SET ?', cliente,
            (err, result)=>{
                if (err) {
                    throw err;
                }
                else{
                    callback(
                        null,
                        {
                            'InsertId': result.InsertId
                        }
                    );
                }
            }
        )
    }
}

module.exports = userModel;

const config = {
    user :'sa',
    password :'111111',
    server:'localhost',   //  127.0.0.1
    database:'testDB',
    options:{
        trustedconnection: true,
        enableArithAbort : true, 
        instancename :'SQLEXPRESS' 
    },
    port : 1433
 
}

module.exports = config; 
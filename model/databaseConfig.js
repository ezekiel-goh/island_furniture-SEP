var mysql = require('mysql');
var dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "ifadminuser",
            password: "C$EBX4bx;9utZeW8PA'@+)",
            database: "islandfurniture-it07"
        });
        return conn;
    }
};
module.exports = dbconnect
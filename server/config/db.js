// config for your database
var sql = require("mssql");
var Q = require("q");

var config = {
    server: '192.0.2.240',
    driver: 'msnodesqlv8',
    user:'gchervet',
    domain:'KENNEDY',
    database:'prod_uni',
    password:'741852852',
    connectionString: 'Driver=msnodesqlv8;Server=192.0.2.240;Database=prod_uni;Trusted_Connection=yes;Integrated_Security=yes',
    port: 1433
};  

module.exports = {

    connectDatabase: function () {
        
        if (!sql) {
            
            sql
            .connect(config).then(pool => {
                console.log("MSSQL connection established")
            })
            .catch(err => {
                console.error(err);
            });

        }
        return sql;
    },

    request: function (queryString) {
        
        return sql.connect(config).then(pool => {
            return pool.request().query(queryString)
        })

    },

    close: function(){
        sql.close();
    }

 };

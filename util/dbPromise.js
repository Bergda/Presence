const mysql = require('mysql');

class Database {
    constructor(config) {
        this.connection = mysql.createPool(config);
    }


    async query(sql, values) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, values, (error, results) => {
                if (error) {
                    reject(error);
                }
                resolve(results);
            });
        });
    }

    async close() {
        return new Promise((resolve, reject) => {
            this.connection.end(error =>{
                if (error) {
                    reject(error);
                };
                resolve();
            })
        });
    }
}

module.exports = Database;
let dbConfig = require('./config/default.json');
try {
    dbConfig = require('./config/develpment.json');
    console.log('Database configuration: development');
} catch (e) {
    console.log('Database configuration: default');
}

module.exports = dbConfig;
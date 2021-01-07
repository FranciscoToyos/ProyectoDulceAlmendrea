require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USUARIO,
    "password": process.env.DB_CONTRAS,
    "database": process.env.DB_DATA,
    "host": "127.0.0.1",
    "port":process.env.DB_PORT,
    "dialect": "mysql",
    "operatorsAliases": 0
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

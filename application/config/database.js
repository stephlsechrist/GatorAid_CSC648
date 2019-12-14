var log = require('../app/lib/logger').child({type: "database"});

module.exports = {
  "development": {
    "username": "postgres",
    "password": "postgres",
    "database": "gatoraid",
    "host": "localhost",
    "dialect": "postgres",
    "logging": function (message) {
      log.debug(message);
    }
  },
  "test": {
    "username": "postgres",
    "password": "postgres",
    "database": "gatoraid",
    "host": "localhost",
    "dialect": "postgres",
    "logging": function (message) {
      log.debug(message);
    }
  },
  "production": {
    "username": "postgres",
    "password": "postgres",
    "database": "gatoraid",
    "host": "localhost",
    "dialect": "postgres",
    "logging": function (message) {
      log.debug(message);
    }
  }
};

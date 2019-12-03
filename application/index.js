'use strict';
var express = require('express');
var kraken = require('kraken-js');
var path = require('path');
var fs = require('fs');
let dir = './files';
if (!fs.existsSync(dir)) {
  fs.mkdir(dir, ()=> {});
}
var options, app;

/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */
options = {
  onconfig: function (config, next) {
    /*
     * Add any additional config setup or overrides here. `config` is an initialized
     * `confit` (https://github.com/krakenjs/confit/) configuration object.
     */

    next(null, config);
  }
};

app = module.exports = express();

app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.set('view engine', 'ejs');
app.use('/files', express.static('files'));

global.db = require('./app/models/index');
global.mailer = require('./app/lib/mailer')();
global.log = require('./app/lib/logger');
global.appRoot = path.resolve(__dirname);

global.kraken = app.kraken;
app.use(kraken(options));
app.on('start', function () {
  global.kraken = app.kraken;
  global.log.info('Application ready to serve requests.');
  global.log.info('Environment: %s', app.kraken.get('env:env'));
});

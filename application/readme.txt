# Gator Aid - A simple Website
---
## Requirements
This project needs nodejs and postgres installed on your machine.
    
    $ node --version
    v10.x

    $ npm --version
    6.1.0
    
    $ psql --version
    v9 or higher 

## Project Setup and deployment

    $ cd to project directory
    $ cd gator-aid
    $ go to psql and create a database gatoraid (CREATE DATABASE gatoraid;)
    ($ create file at config/database.js) <- Done Do not need to do
    ($ Add your database username and password in config/database.js file. See config/database.sample.js file for example.) <- Done Do not need to do
    $ sudo npm i sequelize-cli -g
    $ sudo npm i -g @angular/cli
    $ sudo npm i
    $ sequelize db:migrate
    $ sequelize db:seed:all
    $ sudo mkdir files
    $ sudo mkdir public
    $ sudo npm i pm2 -g
    $ npm run build
    $ pm2 start server.js --name gator-aid-website
    


Now you can access `http://<ip>:8000`. You can also change port by setting `PORT` env variable. The main server file is `server.js`.
`Admin Panel: http://<ip>:8000/admin`
`Admin Login: username: gator_aid_admin, password: 12345678`

Setup the full-stack project

Step 1: create git repository

Front-End:
==========
Step 2: create client folder. Then cd to client.

Step 3: npm install -g vue-cli

Step 4: vue init webpack

Step 5: npm install (to install all dependecies in package.json)


Back-End:
=========
Step 6: create a server folder and cd to server.

Step 7: npm init -f  (enforces another node package)

Step 8: npm install --save nodemon eslint

NOTE: the executing command for start and lint looks to be different on windows and linux. On linux is the followings:

"scripts": {
    "start": "./node_modules/nodemon/bin/nodemon.js src/app.js --exec 'npm run lint && node'",
    "lint": "./node_modules/.bin/eslint **/*.js"
},

in windows is:

"scripts": {
    "start": "nodemon src/app.js",
    "lint": "standard"
  }


Step 9: execute the following command: node C:\Drive_D\100_Tutorials\Web_App\Full_Stack\tab-tracker\server\node_modules\eslint\bin\eslint.js --init

(node <path to eslint.js> --init)

This creates a configuration file for us to use.

Step 10: install required dependencies for the server part: npm install --save express body-parser cors morgan

Step 11: 

Server-side:
- Import necessary packages in to App.js 

Client-side:
- create services and servicesAuthuntication
- use router to define new routes
- use axios to communicate with server
- check communications using postman

=================================================
Step 12: configure database (use sequelize, which works with databases such as mySQL, Postgre, and SQLite) 

- npm install --save sequelize sqlite3@3.1.8


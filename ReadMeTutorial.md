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
- npm install --save axios
- create services and servicesAuthuntication
- use router to define new routes
- use axios to communicate with server
- check communications using postman

=================================================
Step 12: configure database (use sequelize, which works with databases such as mySQL, Postgre, and SQLite) 

- npm install --save sequelize sqlite3
- add sequelize to "app.js"
- create "config.js" file in "config" folder (create "config" folder under src). config file should include the model of your database
- create "models" folder under "src". Create a model for user in a file "User.js". 
- create "index.js" in "models" folder.
- create a "controllers" folder. create "AuthenticationController.js"

Step 13: Add validations:

- npm install --save joi (for validation purposes):
- create folder "policies". create file "AuthenticationControllerPolicy.js"

Step 14: Add vuetify.js (styling and layout based on material design)
- npm install --save vuetify
- go to "main.js" to include "vuetify"

Step 15: Add header:
- create Header.vue
- import header in to App.vue

Step 16: Add v-app to App.vue template (to make styling consistent)

NOTE: You can use <router-link> to navigate between different pages with a "to='PageName'" attribute. Meanwhile, v-list-tile, v-btn, and v-card all extend router-link, so you can use any of the router-link attributes directly on those components instead.

Step 16: Add "Login.vue" on client side.

- create Login.vue file similar to Register.vue
- Add login route to router (index.js)
- Add a post request for login to backend in "AuthenticationService.js"
- Add login button to header that directs to "login" route

Step 17: Create a "login" end point on server side.

- Add a new route in "routes.js"
- Add a "login" method in "./controllers/AuthenticationController.js"

HANDLING SECURITY ISSUES:
=========================
Step 18: install jsonwebtoken (JWT). JWT are an important piece in ensuring trust and security in your application. JWT allow claims, such as user data, to be represented in a secure manner.

- npm install --save jsonwebtoken
- import package in to "./controllers/AuthenticationController.js" together with "../config/config"
- create a helper function "jwtSignUser"
- create a new key ("authentication") in "../config/config"

Step 19: encrypt password. (**This step did not work properly. It was able to encrypt password during registration. But not during login.**) (Part 3, 35-45)

- npm install --save bluebird
- npm install --save bcrypt-nodejs
- import bcrypt to "User.js"
- Moving password check from controller to "User.js" so that the user model will check its password. This is useful if we want to do this check on user elsewhere.

Step 20: Install vuex (install on client-side) (Part 3, 45-)

- npm install --save vuex
- npm install --save vuex-router-sync
- "import { sync } from 'vuex-router-sync'" in main.js and implement the corresponding changes

Step 21: Add logout.

- Add similar button to login in Header, with corresponding function.

Step 22: Add Browse.

- Add a button to top toolbar

Step 23: Add Songs ui component. 

- create Songs.vue component in client
- Add data () which would contain an array of songs.
- Add mounted () that whenever the component is mounted it will hit a backend end point 
- Add a new service (SongsService.js) for songs that manages request to backend.
//REQUIRES
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require("passport-auth0");

const { connectionString } = require('../config').massive;



const port = 3001;
const app = express();


//MASSIVE
massive(connectionString)
.then(db => app.set('db', db))
.catch(console.log);


//SAVED FOR BUILD
//app.use(express.static(`${__dirname}/public/build`));
//




//LISTENING
app.listen (port, ()=> {
    console.log(`Listening on port: ${port}`);
})
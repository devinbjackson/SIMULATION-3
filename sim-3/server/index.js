//REQUIRES
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require("passport-auth0");

const { connectionString } = require('../config').massive;
const { domain, clientID, clientSecret } = require('../config').auth0



const port = 3001;
const app = express();



//MASSIVE
massive(connectionString)
.then(db => app.set('db', db))
.catch(console.log);


app.use(json());
app.use(cors());


app.use( passport.initialize() )
app.use( passport.session() )

passport.use( 
    new Auth0Strategy(
  {
    domain,
    clientID,
    clientSecret,
    callbackURL: "/login"
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    
    app.get('db').getUserByAuthId([profile.id]).then(response => {
        console.log(response)

        if(!response[0]) {
            console.log(profile.id)
            app.get('db').createUserByAuthId([profile.id])
            .then(created => {
                return done(null, created[0])
            }).catch(console.log)
        } else {
            console.log(response[0])
            return done(null, response[0])
        }
    })


    return done(null, profile);
  }
));

passport.serializeUser(function(user, done) {
    done(null, user)
})

passport.deserializeUser(function(obj, done) {
    done(null, obj)
})

app.get(
    '/login', passport.authenticate('auth0', {successRedirect: 'http://localhost:3000/'})
)



//SAVED FOR BUILD
//app.use(express.static(`${__dirname}/public/build`));
//

app.get("/api/test", (req, res, next) => {
    req.app.get('db').getUsers()
    .then(response => {
      res.json(response);
    })
    .catch(console.log)
})


//LISTENING
app.listen (port, ()=> {
    console.log(`Listening on port: ${port}`);
})
const dotenv = require('dotenv').config()  
const express = require("express");
const expressSession = require("express-session");
const passport = require("./middleware/passport-config.js");
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');

const dbPort = process.env.DB_PORT;
const frontEnd = process.env.FRONTEND_URL;
const secret = process.env.SESSION_SECRET;

//connects mongoose to mongodb database
mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://journal_db:JYss2vyRHWmX5kgQ@cluster0.acby7fn.mongodb.net/journal_db', () => {  //this is url is from my cluster that I connected from the cloud to my pc
    useNewUrlParser: true
    console.log("Connected to MongoDB");
});


app.use(express.json());

//middlewares
app.use(     //protects from attacks. And makes things safer.
    cors({
      origin: frontEnd, // <-- location of the react app were connecting to
      methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE'],
      credentials: true,
      
    })
);

// setup session cookies
app.use(
    expressSession({
      secret: secret,
      credentials: true,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 3600000,
        // secure : true       uncomment when its in production
      }
})
);

// app.use(passport.initialize());
// app.use(passport.session());

// this mounts controllers/index.js at the route `/api`
app.use("/api", require("./controllers"));

app.listen(process.env.PORT || 5000, () => {
    console.log('Sever up on http://localhost:5000');
})
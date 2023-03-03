const dotenv = require('dotenv').config()  
const express = require("express");
const expressSession = require("express-session");
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');
const morgan = require("morgan");

const dbPort = process.env.DB_PORT;
const frontEnd = process.env.FRONTEND_URL;
const secret = process.env.SESSION_SECRET;
const db = process.env.DB;

//connects mongoose to mongodb database
mongoose.set("strictQuery", false);
mongoose.set('bufferCommands', false);

mongoose.connect(db);
mongoose.connection.on('error', (err) => {
  console.log(err);
});


app.use(express.json());
app.use(morgan('tiny'));

//middlewares
app.use(     //protects from attacks. And makes things safer.
    cors({
      // origin: frontEnd, // <-- location of the react app were connecting to
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

// this mounts controllers/index.js at the route `/api`
app.use("/api", require("./controllers"));

app.listen(process.env.PORT || 5000, () => {
    console.log('Sever up on http://localhost:5000');
})
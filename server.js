//Install dependencies 
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const logger = require('morgan');
const path = require("path");
//Connection
const PORT = process.env.PORT || 3000;

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use(express.static('public'));

//Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main',
partialsDir: path.join(__dirname, "/views/layouts/partials") }));
app.set('view engine', 'handlebars');


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
});

//Routes
require("./routes/api.js")(app);
require("./routes/html.js")(app);


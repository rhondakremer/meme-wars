const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var bodyParser = require('body-parser')

require ("dotenv").config();


// Define middleware here
//app.use(express.urlencoded({ extended: true }));
app.use(bodyParser({limit: '50mb'}));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the mongoose database
var MONGODB_URI = process.env.MONGODB_URI || 
// "mongodb://wednesday:wednesday1@ds047612.mlab.com:47612/heroku_67183r50";
"mongodb://localhost/memewars";
mongoose.connect(MONGODB_URI, {userMongoClient: true});


// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs



app.get("*", (req, res) => {
  console.log(req.params)
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

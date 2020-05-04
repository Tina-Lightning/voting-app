const mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/vote");

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/todos", {
    useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once("open", function() {
    console.log("MongoDB connection established successfully")
})

module.exports.User = require("./user");
module.exports.Poll = require("./poll");


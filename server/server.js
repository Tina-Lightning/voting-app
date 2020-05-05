require("dotenv").config();
const express  = require("express");
const cors  = require("cors");
const bodyParser = require("body-parser");

const db = require("./models");
const handle = require("./handlers");
const routes = require("./routes");

const app = express();
const port = process.env.PORT;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => res.json({hello: "world"}));
app.use("/api/auth", routes.auth)

//create an error handler
app.use(handle.notFound);
app.use(handle.errors);

// start the server:
app.listen(port, console.log(`Server running on port: ${port}`));

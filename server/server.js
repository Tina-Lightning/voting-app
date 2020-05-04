const express  = require("express");

const handle = require("./handlers");

const app = express();
const port = 4000;

app.get('/', (req, res) => res.json({hello: "world"}));

//create an error handler
app.use((req, res, next) => {
    const err = new Error("Not found");
    err.status = 404;

    next(err);
});

app.use(handle.errors);

// start the server:
app.listen(port, console.log(`Server running on port: ${port}`));

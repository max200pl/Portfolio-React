const express = require("express");
const cors = require('cors');
const api = require("./routes/api");
const app = express();

app.use(cors({
    origin: function (origin, callback) {
        callback(null, true)
    },
    credentials: true,
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // parse all incoming json from the body incoming request
app.use('/api', api);

module.exports = app;
const express = require("express");
const cors = require('cors');
const api = require("./routes/api");
const app = express();

app.use(cors({
    origin: '*' // Разрешить доступ для всех доменов
}));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Что-то сломалось!');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // parse all incoming json from the body incoming request
app.use('/api', api);

module.exports = app;
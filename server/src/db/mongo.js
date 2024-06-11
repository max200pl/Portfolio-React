const mongoose = require('mongoose');
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL


mongoose.connection.once("open", () => {
    console.log("Mongoose connection established!");
})

mongoose.connection.on("error", (err) => {
    console.error(err);
})

async function mongoConnect() {
    console.log(MONGO_URL, 'MONGO_URL');
    mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}

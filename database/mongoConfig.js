const mongoose = require("mongoose");

function connection() {
    let connectionString = "mongodb+srv://titamulyana:pohodeu1@betest.qafjvps.mongodb.net";
    let mongoOption = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        keepAlive: true,
        connectTimeoutMS: 10000
    }

    mongoose.connect(connectionString, mongoOption)
    .then(() => {
        return console.log(`Successfully connected to ${connectionString}`);
    })
    .catch(error => {
        console.log(`Error connecting to database: ${error}`);
        return process.exit(1);
    });
}

module.exports = connection;


const express = require("express");
const logger = require("morgan")
const cors = require("cors");
const helmet = require("helmet");
const fs = require("fs");
const path = require("path");
const mongoose = require('mongoose')
var compression = require('compression')

const usersRoutes = require("./api/UsersApi");
const productRoutes = require("./api/ProductsApi");
const config = require("./server-config")

const logFileStream = fs.createWriteStream(path.join(__dirname, "access.log"), { encoding: "utf8" });
const app = express();

app
    .use(cors())
    .use(logger("common", { stream: logFileStream }))
    .use(helmet())
    .use(compression())
    .use(express.json())
    .use(express.urlencoded())
    .use("/static", express.static('static'))
    // .use("/modules", express.static('node_modules'))
    .use("/api/users", usersRoutes)
    .use("/api/products", productRoutes)

// Global error middle ware
app.use(function (err, req, res, next) {
    // TODO log to morgan
});

//  MongoDB connection
mongoose.connect(config.dbUrl, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
    console.log('Connected to MongoDB')
    app.listen(config.port, function () {
        console.log(`API Server Listening on port ${config.port}!`);
    })
});

app.on('close', function () {
    mongoose.connection.close();
});
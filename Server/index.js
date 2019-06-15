const express = require("express");
const logger = require("morgan")
const cors = require("cors");
const helmet = require("helmet");
const fs = require("fs");
const path = require("path");
const mongoose = require('mongoose')

const usersRoutes = require("./api/UsersApi");
const productRoutes = require("./api/ProductsApi");
const config = require("./server-config")

const logFileStream = fs.createWriteStream(path.join(__dirname, "access.log"), { encoding: "utf8" });
const app = express();

app
    .use(cors())
    .use(logger("common", { stream: logFileStream }))
    .use(helmet())
    .use(express.json())
    .use(express.urlencoded())
    .use("/static", express.static('static'))
    // .use("/modules", express.static('node_modules'))
    .use("/api/users", usersRoutes)
    .use("/api/products", productRoutes)

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
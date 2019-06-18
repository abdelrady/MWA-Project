const express = require("express");
const logger = require("morgan")
const cors = require("cors");
const helmet = require("helmet");
const fs = require("fs");
const path = require("path");
const mongoose = require('mongoose')
const compression = require('compression')
const fileUpload = require('express-fileupload');
const responseTime = require('response-time')

const usersRoutes = require("./api/UsersApi");
const productRoutes = require("./api/ProductsApi");
const auth = require("./api/AuthApi");
const imageRoutes = require("./api/ImagesApi");
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
    .use(fileUpload())
    .use(responseTime())
    .use("/static", express.static('static'))
    // .use("/modules", express.static('node_modules'))
    .use("/api/users", usersRoutes)
    .use("/api/products", productRoutes)
    .use("/api/auth", auth)
    .use("/api/images", /*auth.validUser, */(req, res, next) => {
        res.setHeader("Cache-Control", "public, max-age=2592000");
        next();
    }, imageRoutes)
    .use("*", (req, res, next)=>{
        res.status(500).json({ success: false });
    });

// Global error middle ware
app.use(function (err, req, res, next) {
    // TODO log to morgan
    res.status(500).json({ success: false, error: err });
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

process.on("uncaughtException", (error) => {
    console.log("error")
})
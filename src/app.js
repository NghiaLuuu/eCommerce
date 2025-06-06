'use strict'

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const app = express();

// init middlewares: morgan, helmet, compression
app.use(morgan("tiny"));
app.use(helmet());
app.use(compression());


//init db
require("./dbs/init.mongodb");
const {checkOverLoad} = require("./helpers/check.connect");
checkOverLoad();

//init routes
app.get('/', (req, res, next) => {
    const strCompress = "Hello";
    return res.status(200).json({
        message: 'Welcome LuuNghia',
        metadata: strCompress.repeat(100000)
    })
})
// handling error

module.exports = app;
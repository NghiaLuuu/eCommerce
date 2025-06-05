'use strict'

const mongoose = require("mongoose");
const os = require('os');
const process = require('process');
const _SECONS = 50000;

//count Connect
const countConnect = () => {
    const numConnection = mongoose.connections.length;
    console.log(`Number of connection: ${numConnection}`);
}

//Check over load
const checkOverLoad = () => {
    setInterval( () => {
    const numConnection = mongoose.connections.length;    
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    console.log(`so luong CPU core: ${numCores}`);
    // Example maximum number of connection based on number of cores
    const maxConnection = numCores * 5;
    console.log(`Active connection: ${numConnection}`);
    console.log(`Memory usage: ${memoryUsage/1024/1024} MB`);
    if(numConnection > maxConnection) {
        console.log(`Connection overload detected!`);
    }
    }, _SECONS) //Monitor every 5 second
}

module.exports = {
    countConnect, 
    checkOverLoad
};
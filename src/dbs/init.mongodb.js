'use strict'
require('dotenv').config();
const mongoose = require("mongoose");
const connectString = process.env.MONGODB_URL;
const {countConnect} = require("../helpers/check.connect");

//Singleton Pattern
class Database {
    constructor(){
        this.connect();
    }

    //connect
    connect(type = 'mongodb'){
        if(1 === 1){
            mongoose.set('debug', true);
            mongoose.set('debug', {color : true});
        }
        mongoose.connect(connectString, {
            maxPoolSize : 50
        }).then(_ => {
            console.log(`Connected Mongodb Success`);
            countConnect();

        })
        .catch(err => console.error('MongoDB Connection Error:', err))
    }
    
    static getInstance(){
        if(!Database.instance){
            Database.instance = new Database();
        }
        return Database.instance
    }
}

const instanceMongoDB = Database.getInstance();
module.exports = instanceMongoDB;

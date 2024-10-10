
const mongoose  = require("mongoose");
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;

const InitiateMongoServer = async()=>{
    try{
        await mongoose.connect(mongoURI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log("connected to DB");
    }catch(e){
        console.log(e);
        throw(e);
        }
    };
module.exports= InitiateMongoServer;

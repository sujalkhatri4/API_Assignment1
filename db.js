
const mongoose  = require("mongoose");

const mongoURI = process.env.MONGO_URI;

const InitiateMongoServer = async()=>{
    try{
        await mongoose.connect(MONGOURI,{
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

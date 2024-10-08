const Movie = require('../models/Movies')
const fs = require('fs');

//Function import  movies from json

exports.importMovies = async(req,res)=>{
    try{
        const data = JSON.parse(fs.readFileSync('./movies.json','utf-8'));
        await Movie.insertMany(data);  // import data 
        res.status(200).send ("Movies send sucessfully");
    }
    catch(e){
        console.error(e);


    }

};
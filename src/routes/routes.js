const express = require('express');
const router = express.Router();
const movieController = require('../controllers/Controller');
const {validateMovie}=require('../middleware/middleware');

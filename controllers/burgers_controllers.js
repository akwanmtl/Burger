const express = require("express");

const router = express.Router();

// const burger = require("../models/burger.js");

router.get("/",(req,res)=>{
    
    res.render('index');
});

module.exports = router;
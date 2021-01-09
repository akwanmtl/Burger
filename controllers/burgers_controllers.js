const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/index",(req,res)=>{
    
    burger.selectAll((data) =>{
        
        res.render('index', {burgers:data});
    });

});

router.put("/api/burgers/:id", (req,res)=>{
    const condition = `id = ${req.params.id}`;
    const updateObj = {devoured: req.body.devoured}
    burger.updateOne(updateObj,condition, (result)=>{
        if(result.changedRows === 0){
            return res.status(404).end();
        }
        res.status(200).end();
    });
});


module.exports = router;
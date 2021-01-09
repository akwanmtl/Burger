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
        return res.status(200).end();
    });
});

router.post("/api/burgers", (req,res)=>{
    const burgerName = req.body.burger_name;
    burger.insertOne(['burger_name'],[burgerName],(result)=>{
        res.json({id: result.insertID});
    });
});


module.exports = router;
const express = require("express");
const model = require("../models/exercise");

const app = express.Router();

app
.get("/", (req, res, next) =>{
    model.GetAll()
    .then(user=>{ 
        res.send(user);
    })
    .catch(next) 
})
.get("/byhandle/:handle", (req, res, next) =>{
    model.GetByHandle(req.params.handle)
        .then(user=>{ 
            res.send(user);
        })
        .catch(next) 
    })
.post("/", (req, res, next) =>{
    model.Add(req.body)
        .then(user=>{
            res.status(201).send(user);
        })
        .catch(next) 
})
    
module.exports = app;
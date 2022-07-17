const express = require("express")
const mysql = require("mysql")
const app = express();
const Read= require("./api/operations")
const Insert= require("./api/operations")
const con = require("./lib/database")
const dotenv = require("dotenv")
const cors = require("cors")
require('dotenv').config();
app.use(express.json());
app.use(cors())
app.use(express.static('public'));
app.set("port",process.env.PORT ||3000)
app.get("/",(req,res)=>{
res.send("Hola")
})
app.post("/conectado", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
   
  });

app.get("/read", (req,res)=>{

    Read(con, (result)=>{
        res.json(result);   
    })
})

app.get("/insert", (req,res)=>{

    Insert(con, (result)=>{
        res.json(result);   
    })
})

app.listen(app.get("port")); 
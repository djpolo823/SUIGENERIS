const express = require("express");
const app = express();
const mysql = require("mysql2");

const pool= mysql.createPool({
    connectionLimit:        5,
    database:               "suigeneris",
    host:                   "localhost",
    user:                   "root",
    password:               "Familiaroca1.",
    multipleStatements:     "true"
});

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("paginas_frecuentes");
});

app.listen(8080, ()=>{
    console.log("Servidor inicializado.");
});
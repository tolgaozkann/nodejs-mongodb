const express = require("express");
const app= express();
require("dotenv").config();
require("./src/config/databaseConnection");
const port = process.env.PORT || 5001
const todoRouter = require("./src/routers/todoRouter")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');



app.use(express.json());

app.use("/api",todoRouter)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/",(req,res) =>{
    res.send("Merhaba");
})

app.listen(port, () =>{
    console.log(`Server is working on ${port} port`);
});
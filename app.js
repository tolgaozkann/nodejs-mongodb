const express = require("express");
const app= express();
require("dotenv").config();
require("./src/config/databaseConnection");
const port = process.env.PORT || 5001
const todoRouter = require("./src/routers/todoRouter")
const ExpressSwaggerFnGenerator = require("express-swagger-producer");



app.use(express.json());

app.use(express.urlencoded({
    extended : true
}))

app.use("/api",todoRouter)

app.get("/",(req,res) =>{
    res.send("Merhaba");
})

let options = {
    swaggerDefinition :{
        info : {
            description : "First NodeJs Project",
            title:"First Api",
            version:"1.0.0"
        },
        host:"localhost",
        swagger:"2.0",
        basePath:"/api",
        produces:[
            "application/json",
            "application/xml"
        ],
        schemas: ['http','https'],
        securityDefinition:{
            JWT:{
                type:'apikey',
                in:'header',
                name:'Authorization',
                description:'Basic apikey authorization in the system'
            }
        }
    },
    basedir : __dirname,
    files: ['./routers/**/*.js']
}

const ExpressSwaggerFn = ExpressSwaggerFnGenerator(app);

ExpressSwaggerFn(options);

app.listen(port, () =>{
    console.log(`Server is working on ${port} port`);
});
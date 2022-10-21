const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_CONNECTION_STRING,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
})

    .then(() =>{
        console.log(process.env.MONGO_CONNECTION_STRING);
        console.log("database connected");
    })
    .catch((err) =>{
        console.log(process.env.MONGO_CONNECTION_STRING);
        console.log("database not connected " + err)
    });
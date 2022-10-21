const todo = require("../models/todoModel");

const todoAdd = async (req,res) => {
    console.log(req.body);

    try {
        console.log("here")
        let todoAddModel = new todo();
        console.log("here")
        todoAddModel.name = req.body.name;
        todoAddModel.description = req.body.description;
        
        console.log(todoAddModel);

        await todoAddModel.save()
            .then(()=>{
                return res.status(201).json(todoAddModel)
            })
            .catch((err)=>{
                return res.status(400).json({
                    success: false,
                    message: `Error when saving to database: ${err}`
                })
            })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Error : ${error}`
        })
    }
}


module.exports = {
    todoAdd
};
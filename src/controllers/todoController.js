const todo = require("../models/todoModel");

const todoAdd = async (req,res) => {
    console.log(req.body);

    try {
        const todoAdd = new todo(req.body);

        await todoAdd.save()
            .then(()=>{
                return res.status(201).json(todoAdd)
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
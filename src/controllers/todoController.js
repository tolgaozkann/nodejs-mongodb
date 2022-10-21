const todo = require("../models/todoModel");

const todoAdd = async (req,res) => {
    console.log(req.body);

    try {
        const _todo = await todo.findOne({name:req.body.name});

        if(_todo){
            return res.status(400).json({
                success:false,
                message:"There is a record with this name"
            })
        }
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


const todoGetAll = async (req,res) =>{
    try {
        const todoGetAll = await todo.find({});
        return res.status(200).json({
            success:true,
            data: todoGetAll
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message : "Error when getting records from database"
        })
    }
}

module.exports = {
    todoAdd,
    todoGetAll
};
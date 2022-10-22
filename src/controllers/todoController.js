


const todo = require("../models/todoModel");
/**
 * @typedef Error
 * @property {integer} status.required - Error req's response code- Status Code - eg:200
 * @property {bool} success.required - Error - Status Code - eg:true
 * @property {string} message.required - Successful - Status Code - eg:true
 */
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

const todoDelete = async (req,res) => {
    const {id} = req.params
    try {
        const todoModel = await todo.findByIdAndDelete(id,req.body);
        if(todoModel){
            return res.status(200).json({
                success : true,
                message : "Record deleted succesfully"
            })
        }
        else return res.status(400).json({
            success : false,
            message : `Error when deleting the record`
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : `Error when deleting the record error: ${error}`
        })
    }
}

const todoUpdate = async (req,res) => {
    const {id} = req.params;
    try {
        const todoUpdate = await todo.findByIdAndUpdate(id,req.body)

        if(todoUpdate){
            return res.status(200).json({
                success : true,
                message : "Updated succesfully"
            })
        }
        else return res.status(400).json({
            success :false,
            message :"Error when updating the record"
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : `Error when updating the record error: ${error}`
        })
    }

}

const todoGetById = async (req,res) =>  {
    const {id} = req.params;

    try{
        const todoObject = await todo.findById(id);

        if(todoObject){
            return res.status(200).json({
                success: true,
                data : todoObject
            })
        }
        else return res.status(400).json({
            success: false,
            message :"Record could not be found"
        })
    }catch(error){
        return res.status(500).json({
            success : false,
            message : "Error when getting data from database"
        })
    }
}

module.exports = {
    todoAdd,
    todoGetAll,
    todoDelete,
    todoUpdate,
    todoGetById
};
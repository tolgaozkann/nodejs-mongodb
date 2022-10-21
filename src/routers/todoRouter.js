const router  = require("express").Router();
const todoController = require("../controllers/todoController");

router.post("/todo",todoController.todoAdd)

router.get("/todo",todoController.todoGetAll)

module.exports = router
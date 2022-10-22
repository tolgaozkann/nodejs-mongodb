const router  = require("express").Router();
const todoController = require("../controllers/todoController");

router.post("/todo",todoController.todoAdd)

router.get("/todos",todoController.todoGetAll)

router.put("/todos/:id",todoController.todoUpdate)

router.delete("/todo/:id",todoController.todoDelete)

router.get("/todo/:id",todoController.todoGetById)

module.exports = router
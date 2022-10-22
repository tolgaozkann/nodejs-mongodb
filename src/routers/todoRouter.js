const router  = require("express").Router();
const todoController = require("../controllers/todoController");


/**
 * This controller adds to database record
 * Test
 * @route GET /
 * @param {string}  req.body.required
 * @param {*} res 
 * @returns 
 */
router.post("/todo",todoController.todoAdd)
/**
 * @typedef Error
 * @property {integer} status.required - Error req's response code- Status Code - eg:200
 * @property {bool} success.required - Error - Status  - eg:true
 * @property {string} message.required - Error - Status message - eg:true
 */
router.get("/todos",todoController.todoGetAll)

router.put("/todos/:id",todoController.todoUpdate)

router.delete("/todo/:id",todoController.todoDelete)

router.get("/todo/:id",todoController.todoGetById)

module.exports = router
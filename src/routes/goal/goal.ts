import express from "express"

const router = express.Router()
const goalController = require('../../api/goal/goal.controller')

router.post('/create', goalController.createGoal)
router.get('/', goalController.readAll)
router.get('/:id', goalController.readById)
router.patch('/:id', goalController.updateGoal)
router.delete('/:id', goalController.deleteById)

module.exports = router
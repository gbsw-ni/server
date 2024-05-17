import express from "express"

const router = express.Router()
const publicGoalController = require('../../api/goal/goal.controller')

router.post('/create', publicGoalController.createGoal)
router.get('/', publicGoalController.readAll)
router.get('/:id', publicGoalController.readById)
router.patch('/:id', publicGoalController.updateGoal)
router.delete('/:id', publicGoalController.deleteById)

router.post('/:userId/create', publicGoalController.createGoal)
// router.get('/:userId/', publicGoalController.readAll) // 작동 안됨 (위에 있는 readAll과 겹침)
// router.get(':userId/:id', publicGoalController.readById) // 작동 안됨 이유는 모르겠음
router.patch('/:userId/:id', publicGoalController.updateGoal)
router.delete('/:userId/:id', publicGoalController.deleteById)

module.exports = router
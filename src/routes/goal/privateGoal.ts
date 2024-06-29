import { Router } from "express"

const router: Router = Router()
const vGoalController = require('../../api/goal/privateGoalController')

router.post('/:userId/create', vGoalController.createGoal)
router.get('/:userId/', vGoalController.readAll)
router.get('/:userId/:id', vGoalController.readById) // 작동 안됨 이유는 모르겠음 - 해결
router.patch('/:userId/:id', vGoalController.updateGoal)  
router.delete('/:userId/:id', vGoalController.deleteById)
router.post('/:userId/complete', vGoalController.complete)

module.exports = router
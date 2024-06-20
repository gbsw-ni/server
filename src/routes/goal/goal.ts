// import express from "express"

// const router = express.Router()
// const publicGoalController = require('../../api/goal/goal.controller')

// // public
// router.post('/create', publicGoalController.createGoal)
// router.get('/', publicGoalController.readAll)
// router.get('/:id', publicGoalController.readById)
// router.patch('/:id', publicGoalController.updateGoal)
// router.delete('/:id', publicGoalController.deleteById)

// // //private
// // router.post('/personal/:userId/create', publicGoalController.createGoal)
// // // router.get('/personal/:userId/', publicGoalController.readAll) // 작동 안됨 (위에 있는 readAll과 겹침)
// // // router.get('/personal/:userId/:id', publicGoalController.readById) // 작동 안됨 이유는 모르겠음 - 해결
// // router.patch('/personal/:userId/:id', publicGoalController.updateGoal)
// // router.delete('/personal/:userId/:id', publicGoalController.deleteById)

// module.exports = router
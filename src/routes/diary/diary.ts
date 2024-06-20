import express from "express"

const router = express.Router()
const diaryController = require('../../api/diary/diaryController')

router.post('/:userId/create', diaryController.createDiary)
router.get('/:userId/', diaryController.readByUser) //유저별의 readAll
router.get('/:userId/:id', diaryController.readById)
router.patch('/:userId/:id', diaryController.updateDiary)
router.delete('/:userId/:id', diaryController.deleteById)

module.exports = router
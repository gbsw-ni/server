import { Router, Request, Response, NextFunction } from "express";


const router: Router = Router()

router.get('/', (_: Request, res: Response, next: NextFunction) => {
  res.send('Wine API')
})

const privateGoal = require('./goal/privateGoal')
router.use('/vGoals', privateGoal)

const user = require('./user/user')
router.use('/users', user)

const diary = require('./diary/diary')
router.use('/diaries', diary)

const friend = require('./friend/friend')
router.use('/friends', friend)

module.exports = router
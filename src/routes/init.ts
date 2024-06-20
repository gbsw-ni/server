import { Router, Request, Response, NextFunction } from "express";


const router: Router = Router()

router.get('/', (_: Request, res: Response, next: NextFunction) => {
  res.send('Wine API')
})

// const goal = require('./goal/goal')
// router.use('/goals', goal)

const diary = require('./diary/diary')
router.use('/diary', diary)

const friend = require('./friend/friend')
router.use('/friend', friend)

module.exports = router
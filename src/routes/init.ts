import { Router, Request, Response, NextFunction } from "express";


const router: Router = Router()

// router.get('/', (_: Request, res: Response, next: NextFunction) => {
//   res.send('Wine API')
// })

const goal = require('./goal/goal')
router.use('/goals', goal)

module.exports = router
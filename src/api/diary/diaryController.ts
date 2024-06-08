import { Request, Response } from "express"

const diaryService = require('./diary.service')

const createDiary = async (req: Request, res: Response) => {
  const service = await diaryService.create(req.body)

  // res.status.json(service)
}
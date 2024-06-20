import { Request, Response } from "express"

const diaryService = require('./diary.service')

const createDiary = async (req: Request, res: Response) => {
  const _user = +req.params.userId
  const service = await diaryService.create(_user, req.body)

  res.status(201).json(service)
}

const readByUser = async (req: Request, res: Response) => {
  const _user = +req.params.userId
  const service = await diaryService.readByUser(_user)

  res.status(200).json(service)
}

const readById = async (req: Request, res: Response) => {
  const _id = +req.params.id
  const service = await diaryService.readById(_id)

  res.status(200).json(service)
}

const updateDiary = async (req: Request, res: Response) => {
  const _id = +req.params.id
  const service = await diaryService.update(_id, req.body)

  res.status(200).json(service)
}

const deleteById = async (req: Request, res: Response) => {
  const _id = +req.params.id
  const service = await diaryService.deleteById(_id, req.body)

  res.status(204).json(service)
}
import { Request, Response } from "express"
// import { Goal } from "../../entities/goal.entity"

const goalService = require('./goal.service')

const createGoal = async (req: Request, res: Response) => {
  const service = await goalService.create(req.body)

  res.status(201).json(service)
}

const readAll =  async (req: Request, res: Response) => {
  const service = await goalService.readAll()

  res.status(200).json(service)
}

const readById = async (req: Request, res: Response) => {
  const _id = +req.params.id
  const service = await goalService.readById(_id)
  
  res.status(200).json(service)
}

const updateGoal = async (req: Request, res: Response) => {
  const _id = +req.params.id
  const service = await goalService.update(_id, req.body)

  res.status(200).json(service)
}

const deleteById = async (req: Request, res: Response) => {
  const _id = +req.params.id
  await goalService.deleteById(_id);
  
  res.status(204).send();
}

module.exports = { createGoal, readAll, readById, updateGoal, deleteById }
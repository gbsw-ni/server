// import { Request, Response } from "express"

// const goalService = require('./privateGoal.service')

// const createGoal = async (req: Request, res: Response) => {
//   const _user = +req.params.userId
//   const service = await goalService.create(_user, req.body)
  
//   res.status(201).json(service)
// }

// const readAll =  async (req: Request, res: Response) => {
//   const _user = +req.params.userId
//   const service = await goalService.readAll(_user)
  
//   res.status(200).json(service)
// }

// const readById = async (req: Request, res: Response) => {
//   const _user = +req.params.userId
//   const _id = +req.params.id
//   const service = await goalService.readById(_id, _user)
  
//   res.status(200).json(service)
// }

// const updateGoal = async (req: Request, res: Response) => {
//   const _user = +req.params.userId
//   const _id = +req.params.id
//   const service = await goalService.update(_id, _user, req.body)
  
//   res.status(200).json(service)
// }

// const deleteById = async (req: Request, res: Response) => {
//   const _user = +req.params.userId
//   const _id = +req.params.id
//   await goalService.deleteById(_id, _user);
  
//   res.status(204).send();
// }

// const complete = async (req: Request, res: Response) => {
//   const _user = +req.params.userId
//   const _id = +req.params.id
//   const service = await goalService.complete(_id, _user)
  
//   res.status(201).json(service);
// }

// module.exports = { createGoal, readAll, readById, updateGoal, deleteById }
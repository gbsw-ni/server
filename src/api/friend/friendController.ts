import { Request, Response } from 'express'

const friendService = require('./friend.service')

const applyFriend = async (req: Request, res: Response) => {
  const _user1 = +req.params.userId
  const service = await friendService.applyFriend(_user1, req.body)

  res.status(201).json(service)
}

const findFriend = async (req: Request, res: Response) => {
  const _user = +req.params.userId

  const service = await friendService.findFriend(_user)
  
  res.status(200).json(service)
}

const findApplier = async (req: Request, res: Response) => {
  const _user2 = +req.params.userId

  const service = await friendService.findApplier(_user2)
  
  res.status(200).json(service)
}

const acceptApply = async (req: Request, res: Response) => {
  const _user1 = +req.params.userId1
  const _user2 = +req.params.userId2

  const service = await friendService.acceptApply(_user1, _user2)

  res.status(200).json(service)
}

const searchUser = async (req: Request, res: Response) => {
  const service = await friendService.searchUser(req.body)

  res.status(200).json(service)
}

const deleteFriend = async (req: Request, res: Response) => {
  const _userId1 = +req.params.userId1
  const _userId2 = +req.params.userId2

  const service = friendService.deleteFriend(_userId1, _userId2)

  res.status(204).json(service)
}

module.exports = { applyFriend, findFriend, findApplier, acceptApply, searchUser, deleteFriend }
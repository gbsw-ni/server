import { Request, Response } from 'express'

const friendService = require('./diary.service')

const applyFriend = async (req: Request, res: Response) => {
  const _user1 = +req.params.userId1
  const service = await friendService.applyFriend(_user1, req.body)

  res.status(201).json(service)
}

const appliedUserRead = async (req: Request, res: Response) => {
  const _user2 = +req.params.userId2

  const readQry = friendService.appliedUserRead(_user2)
  
  res.status(200).json(readQry)
}

const acceptApply = async (req: Request, res: Response) => {
  const _user1 = +req.params.userId1
  const _user2 = +req.params.userId2

  const accpetQry = friendService.acceptApply(_user1, _user2)

  res.status(200).json(accpetQry)
}

const searchUser = async (req: Request, res: Response) => {
  const _friendCode = req.body.friendCode // 문자열

  const searchQry = friendService.searchUser(_friendCode)

  res.status(200).json(searchQry)
}
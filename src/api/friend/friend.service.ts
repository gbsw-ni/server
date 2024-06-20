import { createDBconnection } from "../../utils/db.config";
import { ApplyFriendDto, SearchFriendDto } from "../../models/friendModel"

const prisma = createDBconnection()

const applyFriend = async (userId1: number, friend: ApplyFriendDto) => {
  const { userId2 } = friend
  const applyQry = await prisma.friend.create({
    data: { userId1, userId2, isAccepted: false}
  })
  
  return { status: 201, message: applyQry }
}

const appliedUserRead = async (userId2: number) => {
  const foundApplies = await prisma.friend.findMany({ select: { userId1: true,  }, where: { userId2 } })
  
  const userIds = foundApplies.map( applier => applier.userId1 )

  const appliers = await prisma.user.findMany({ where: { id: { in: userIds } } })
  
  return { status: 200, qry: appliers }
}

const acceptApply = async (myId: number, otherId: number) => {
  const exist = await prisma.friend.findFirst({ where: { userId1: otherId, userId2: myId } })

  if (!exist) return { status: 404, message: '404 not found' }
  
  const acceptQry = await prisma.friend.update({
    where: { userId1_userId2: { userId1: otherId, userId2: myId } },
    data: { isAccepted: true },
  })
  
  return { status: 200, message: acceptQry}
}

const searchUser = async (friend: SearchFriendDto) => {
  const { friendCode } = friend
  if (!friendCode) return { status: 204, message: "204 no content"}

  const findQry = await prisma.user.findUnique({ where: { friendCode } })
  
  return { status: 200, qry: findQry }
}

const deleteFriend = async (myId: number, otherId: number) => {
  // myId가 userId1일수도 있고, userId2일수도 있음. 둘 다 검색 하는 로직이 필요함.
  const exist = await prisma.friend.findFirst({ where: { OR: [
    { userId1: myId, userId2: otherId }, { userId1: otherId, userId2: myId }
  ] } })

  if (!exist) return { status: 404, message: '404 not found' }

  const deleteQry = await prisma.friend.deleteMany({ where: { OR: [
    { userId1: myId, userId2: otherId }, { userId1: myId, userId2: otherId }
  ] } })

  return { status: 204, message: deleteQry}
}

export = { applyFriend, appliedUserRead, acceptApply, searchUser, deleteFriend }
import { createDBconnection } from '../../utils/db.config'
import { CreateGoalDto, UpdateGoalDto } from "../../dto/goal.dto"

const prisma = createDBconnection()

const create = async (goal: CreateGoalDto) => {
  const {title, contents, type, img } = goal
  const rating = 1
  const createdAt = new Date()
  const updatedAt = new Date()
  
  const createQry = await prisma.goal.create({
    data: { title, contents, type, img, rating: rating, createdAt: createdAt, updatedAt:  updatedAt }
  })

  return { status: 201, message: createQry }
}

const readAll = async () => {
  const goals = await prisma.goal.findMany()

  return { status: 200, qry: goals }
}

const readById = async (id: number) => {
  const goal = await prisma.goal.findUnique({ where: { id } })
  if (!goal) {
    return { status: 404, message: '404 not found' }
  } else {
    return {status: 200, qry: goal }
  }
}

const update = async (id: number, goal: UpdateGoalDto) => {
  const exist = await prisma.goal.findUnique({ where: { id }})
  // id에 해당하는 목표가 없으면 404 반환.
  if (!exist) return { status: 404, message: '404 not found' }

  const { title, contents, type, img } = goal
  const updatedAt = new Date()
  
  const updateQry = await prisma.goal.update({
    where: { id },
    data: { title, contents, type, img, updatedAt }
  })
  
  return { status: 200, message: updateQry }
}

const deleteById = async (id: number) => {
  const exist = await prisma.goal.findUnique({ where: { id }})
  // id에 해당하는 목표가 없으면 404 반환.
  if (!exist) return { status: 404, message: '404 not found' }

  await prisma.goal.delete({ where: { id } })

  return { status: 204, message: 'goal deleted'}
}

export { create, readAll, readById, update, deleteById }
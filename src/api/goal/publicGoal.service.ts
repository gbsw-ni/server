// import { createDBconnection } from '../../utils/db.config'
// import { CreateGoalDto, UpdateGoalDto } from "../../models/goalModel"

// const prisma = createDBconnection()

// const create = async (goal: CreateGoalDto) => {
//   const { title, contents, type, img } = goal
//   const rating = 1
//   const createdAt = new Date()

//   const createQry = await prisma.privateGoal.create({
//     data: { userId, title, contents, type, img, rating: rating, createdAt: createdAt, updatedAt: createdAt }
//   })
// }
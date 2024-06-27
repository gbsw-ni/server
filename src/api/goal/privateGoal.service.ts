// import { createDBconnection } from '../../utils/db.config'
// import { CreateGoalDto, UpdateGoalDto } from "../../models/goalModel"

// const prisma = createDBconnection()

// const create = async (userId: number, goal: CreateGoalDto) => {
//   const { title, contents, type, img } = goal
//   const rating = 1
//   const createdAt = new Date()
  
//   const createQry = await prisma.privateGoal.create({
//     data: { userId, title, contents, type, img, rating: rating, createdAt: createdAt, updatedAt: createdAt }
//   })

//   return { status: 201, message: createQry }
// }

// const readAll = async (userId: number) => {

//   const goals = await prisma.privateGoal.findMany({ where: { userId: userId }})

//   return { status: 200, qry: goals }
// }

// const readById = async (id: number, userId: number) => {
//   const goal = await prisma.privateGoal.findUnique({ where: { id, userId } })

//   if (!goal) {
//     return { status: 404, message: '404 not found' }
//   } else {
//     return {status: 200, qry: goal }
//   }
// }

// const update = async (id: number, userId: number, goal: UpdateGoalDto) => {
//   const exist = await prisma.privateGoal.findUnique({ where: { id, userId } })
//   // id에 해당하는 목표가 없으면 404 반환.
//   if (!exist) return { status: 404, message: '404 not found' }

//   const { title, contents, type, img } = goal
//   const updatedAt = new Date()
  
//   const updateQry = await prisma.privateGoal.update({
//       where: { id, userId },
//       data: { title, contents, type, img, updatedAt }
//     })
  
//   return { status: 200, message: updateQry }
// }

// const deleteById = async (id: number, userId: number) => {
//   const exist = await prisma.privateGoal.findUnique({ where: { id, userId } })
//     // id에 해당하는 목표가 없으면 404 반환.
//     if (!exist) return { status: 404, message: '404 not found' }
    
//     const deleteQry = await prisma.privateGoal.delete({ where: { id, userId } })
    
//     return { status: 204, message: deleteQry }
//   }
  
//   const complete = async (id: number, userId: number) => {
//     // // complete table에 post.
//     // const exist = !userId ? await pb.findUnique({ where: { id }})
//     // : await prisma.privateGoal.findUnique({ where: { id, userId: userId } })
//     // // id에 해당하는 목표가 없으면 404 반환.
//     // if (!exist) return { status: 404, message: '404 not found' }

//     // const goal = await pb
    
//     // const completeQry = !userId ? await prisma.publicComplete.create({
//     //   data: { userId: userId, goal: : pb.findUnique({ where: { id } }) }
//     // })

//     //미완. 수정중. complete table에 완료된 목표를 추가하는 방식.
// }

// // const incomplete = async (id: number) => {
//   // complete table에서 삭제.
// // }

// export { create, readAll, readById, update, deleteById }
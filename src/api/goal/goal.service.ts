// import { createDBconnection } from '../../utils/db.config'
// import { CreateGoalDto, UpdateGoalDto } from "../../models/goalModel"

// const prisma = createDBconnection()
// const pv = prisma.privateGoal
// const pb = prisma.publicGoal

// const create = async (userId: number, goal: CreateGoalDto) => {
//   const { title, contents, type, img } = goal
//   const rating = 1
//   const createdAt = new Date()
  
//   const createQry = !userId ? await pb.create({
//     data: { title, contents, type, img, rating: rating, createdAt: createdAt, updatedAt:  createdAt }
//   })
//   : await pv.create({
//     data: { userId, title, contents, type, img, rating: rating, createdAt: createdAt, updatedAt: createdAt }
//   })

//   return { status: 201, message: createQry }
// }

// const readAll = async (userId: number) => {

//   const goals = !userId ? await pb.findMany()
//     : await pv.findMany({ where: { userId: userId }})

//   return { status: 200, qry: goals }
// }

// const readById = async (id: number, userId: number) => {
//   const goal = !userId ? await pb.findUnique({ where: { id } })
//     : await pv.findUnique({ where: { id, userId: userId } })

//   if (!goal) {
//     return { status: 404, message: '404 not found' }
//   } else {
//     return {status: 200, qry: goal }
//   }
// }

// const update = async (id: number, userId: number, goal: UpdateGoalDto) => {
//   const exist = !userId ? await pb.findUnique({ where: { id }})
//     : await pv.findUnique({ where: { id, userId: userId } })
//   // id에 해당하는 목표가 없으면 404 반환.
//   if (!exist) return { status: 404, message: '404 not found' }

//   const { title, contents, type, img } = goal
//   const updatedAt = new Date()
  
//   const updateQry = !userId ? await pb.update({
//     where: { id },
//     data: { title, contents, type, img, updatedAt }
//   })
//     : await pv.update({
//       where: { id, userId },
//       data: { title, contents, type, img, updatedAt }
//     })
  
//   return { status: 200, message: updateQry }
// }

// const deleteById = async (id: number, userId: number) => {
//   const exist = !userId ? await pb.findUnique({ where: { id }})
//     : await pv.findUnique({ where: { id, userId: userId } })
//     // id에 해당하는 목표가 없으면 404 반환.
//     if (!exist) return { status: 404, message: '404 not found' }
    
//     const deleteQry = !userId ? await pb.delete({ where: { id } })
//     : await pv.delete({ where: { id, userId: userId } })
    
//     return { status: 204, message: deleteQry }
//   }
  
//   const complete = async (id: number, userId: number) => {
//     // // complete table에 post.
//     // const exist = !userId ? await pb.findUnique({ where: { id }})
//     // : await pv.findUnique({ where: { id, userId: userId } })
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
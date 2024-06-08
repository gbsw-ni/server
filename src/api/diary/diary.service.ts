import { createDBconnection } from "../../utils/db.config"
import { CreateDiaryDto, UpdateDiaryDto } from "../../models/diaryModel"import { join } from "path"

const prisma = createDBconnection()

const create = async (userId: number, diary: CreateDiaryDto) => {
  const { contents } = diary
  const createdAt = new Date()
  
  const createQry = await prisma.diary.create({
    data: { userId, diary, createdAt: createdAt }
  })

  return { status: 201, message: createQry }
}

// const readById = async (id: number, userId: number) => {
//   const diary = await prisma.diary.findUnique({ where: { id } })

//   if (!diary) {
//     return { status: 404, message: '404 not found' }
//   } else {
//     return { staus: 200, qry: diary}
//   }
// }

const update = async (userId: number, diary: UpdateDiaryDto) => {
  
}
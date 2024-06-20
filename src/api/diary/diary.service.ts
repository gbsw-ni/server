import { createDBconnection } from "../../utils/db.config"
import { CreateDiaryDto, UpdateDiaryDto } from "../../models/diaryModel"

const prisma = createDBconnection()

const create = async (userId: number, diary: CreateDiaryDto) => {
  const { contents, mission, rating } = diary
  const createdAt = new Date()
  
  const createQry = await prisma.diary.create({
    data: { userId, contents, mission, rating, createdAt, updatedAt: createdAt }
  })

  return { status: 201, message: createQry }
}

const readByUser = async (userId: number) => {
  const diary = await prisma.diary.findMany({ where: { userId } })

  if (!diary) return { status: 404, message: '404 not found' }
  else return { status: 200, qry: diary }
}

const readById = async (id: number) => {
  const diary = await prisma.diary.findUnique({ where: { id } })

  if (!diary) {
    return { status: 404, message: '404 not found' }
  } else {
    return { status: 200, qry: diary }
  }
}

const update = async (id: number, diary: UpdateDiaryDto) => {
  const exist = await prisma.diary.findUnique({ where: { id } });

  if (!exist) return { status: 404, message: '404 not found' };

  const { contents, mission, rating } = diary;
  const updatedAt = new Date();

  const updateQry = await prisma.diary.update({
    where: { id },
    data: { contents, mission, rating, updatedAt } });

    return { status: 200, message: updateQry };
}

const deleteById = async (id: number) => {
  const exist = await prisma.diary.findUnique({ where: { id } });

  if (!exist) return { status: 404, message: '404 not found' }

  const deleteQry = await prisma.diary.delete({ where: { id } })

  return { status: 204, message: deleteQry }
}
import { hash, compare } from 'bcryptjs'
import { sign, verify } from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid';
import { createDBconnection } from '../../utils/db.config'
import { UserDto } from '../../models/userModel'
import { User } from '../../entities/user.entity'

const prisma = createDBconnection()

const generateUniqueFriendCode = (): string => {
  return uuidv4().substr(0, 8); // UUID에서 첫 8자리 사용
};

const create = async (user: UserDto) => {
  const { email, name, password }: UserDto = user
  const _password = (await hash(user.password, 10)).toString()
  const friendCode = generateUniqueFriendCode();

  if (await prisma.user.findUnique({ where: { email } })) return { status: 401, type: 'EXISTED' }

  const createQry = await prisma.user.create({
    data: { email, name, password: _password, friendCode, level: 1, rating: 0, ratingLimit: 10 }
  })

  return { status: 200, message: createQry }
}

const login = async (user: UserDto) => {
  const { email: _email, password: _password }: UserDto = user

  const findQry = await prisma.user.findUnique({ where: { email: _email } })

  if (!findQry) return { status: 401, type: 'NOTFOUND' }

  const { id, email, password }: User = findQry

  if (!await compare(_password, password)) return { status: 401, type: 'INVALID' }

  const token = sign({ id, email }, 'token_key', { expiresIn: '3d' })
  return { status: 200, token }
}

const take = async (range: number) => {  
  return { status: 200, qry: await prisma.user.findMany({ take: range }) }
}

export { create, login, take }
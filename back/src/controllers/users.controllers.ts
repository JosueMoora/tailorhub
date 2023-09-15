import { Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import bcrypt from 'bcrypt'
import { generateJWT } from '../helpers/generateJWT'
const usersFilePath = path.join(__dirname, '../data/users.json')

interface User {
  id: number
  name: string
  username: string
  password: string
  favorite: []
}

// Función para leer usuarios desde el archivo JSON
export function readUsersFile (): User[] {
  try {
    const data = fs.readFileSync(usersFilePath, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error al leer el archivo de usuarios:', error)
    return []
  }
}

// Función para guardar usuarios en el archivo JSON
function saveUsersFile (users: User[]): void {
  try {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf8')
  } catch (error) {
    console.error('Error al guardar en el archivo de usuarios:', error)
  }
}

// Función para registrar un nuevo usuario
export function registerUser (req: Request, res: Response): any {
  const { name, username, password, favorite } = req.body
  const users = readUsersFile()
  // Verificar si el usuario ya existe
  if (users.some((user: User) => user.username === username)) {
    res.status(400).json('El usuario ya existe') // El usuario ya existe
  } else {
    const saltRounds = 10
    const hashedPassword = bcrypt.hashSync(password, saltRounds)
    const newUser: User = { id: users.length + 1, name, username, password: hashedPassword, favorite }
    // Agregar el nuevo usuario a la lista
    users.push(newUser)
    saveUsersFile(users)
    res.status(201).json('Usuario creado con exito') // Usuario registrado con éxito
  }

  // Hash de la contraseña
}

// Función para autenticar a un usuario
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function authenticateUser (req: Request, res: Response) {
  const { username, password } = req.body
  const users = readUsersFile()

  // Buscar el usuario por nombre de usuario
  const user = users.find((u: User) => u.username === username)
  if ((user == null)) {
    return res.status(400).json({
      msg: 'Usuario no registrado'
    })
  }
  const validate = bcrypt.compareSync(password, user.password)
  if (!validate) {
    return res.status(401).json({
      msg: 'Contraseña incorrecta'
    })
  }

  const token: any = await generateJWT(user.id)
  res.cookie('token', token, { httpOnly: true, sameSite: 'lax', maxAge: 1000 * 60 * 60 })
  return res.status(200).json('acceso exitoso') // Autenticación exitosa
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function logout (_req: Request, res: Response) {
  try {
    res.cookie('token', null, { httpOnly: true, sameSite: 'lax', maxAge: 0, path: '/', secure: false })
    return res.status(200).json('Sesion cerrada exitosamente')
  } catch (error) {
    return res.status(400).json('Invalid Token')
  }
}

export function favorite (req: Request, res: Response): any {
  const users = readUsersFile()
  const user = users.find((u: User) => u.id === req.body.id)
  if (user == null) return res.status(404).json('Usuario no encontrado')
  res.status(200).json({ name: user.name, username: user.username, favorite: user.favorite })
}

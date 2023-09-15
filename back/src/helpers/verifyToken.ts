import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { readUsersFile } from '../controllers/users.controllers'

interface Payload {
  id: number
  iat: number
  exp: number
}

export const TokentValidation = (req: Request, res: Response, next: NextFunction): any => {
  const token = req.cookies.token
  if (token == null) {
    return res.status(401).json({
      msg: 'The token is required'
    })
  }

  try {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/prefer-nullish-coalescing
    const { id } = jwt.verify(token, process.env.TOKEN_SECRET || 'tokentest') as Payload
    const users = readUsersFile()
    const user = users.find((u) => u.id === id)
    if (user == null) {
      return res.status(401).json({
        msg: 'Token is not valid - user does not exist'
      })
    }
    req.body.id = id
    next()
  } catch (error) {
    res.status(401).json({
      msg: 'Token is not valid'
    })
  }
}

import { Request, Response } from 'express'
import { RegisterUserDto } from '../../domain'

export class AuthController {
    constructor() {}

    registerUser = (req: Request, res: Response) => {
        const [error, registerUserDto] = RegisterUserDto.create(req.body)

        if (error) {
            return res.status(400).json({ error })
        }

        return res.status(200).json(registerUserDto)
    }

    loginUser = (req: Request, res: Response) => {
        res.status(200).json('User login controller')
    }
}

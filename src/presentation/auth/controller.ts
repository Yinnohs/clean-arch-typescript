import { Request, Response } from 'express'
import { AuthRepository, RegisterUserDto } from '../../domain'

export class AuthController {
    constructor(private readonly authRepository: AuthRepository) {}

    registerUser = (req: Request, res: Response) => {
        const [error, registerUserDto] = RegisterUserDto.create(req.body)

        if (error) {
            return res.status(400).json({ error })
        }

        this.authRepository
            .register(registerUserDto!)
            .then((user) => res.status(201).json(user))
            .catch((error) => res.status(500).json(error))

        return res.status(200).json(registerUserDto)
    }

    loginUser = (req: Request, res: Response) => {
        res.status(200).json('User login controller')
    }
}

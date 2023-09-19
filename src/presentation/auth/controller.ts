import { Request, Response } from 'express'

export class AuthController {
    constructor() {}

    registerUser = (req: Request, res: Response) => {
        res.status(200).json('User register controller')
    }

    loginUser = (req: Request, res: Response) => {
        res.status(200).json('User login controller')
    }
}

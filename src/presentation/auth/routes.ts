import { Router } from 'express'
import { AuthController } from './controller'

export class AuthRoutes {
    static get routes(): Router {
        const controller = new AuthController()
        const router = Router()

        //routes definition
        router.post('/login', controller.loginUser)
        router.post('/register', controller.registerUser)

        return router
    }
}

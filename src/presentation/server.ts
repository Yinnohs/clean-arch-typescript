import express, { Request, Response, Router, json } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

export interface ServerOptions {
    port?: number
    router: Router
}

export class Server {
    public readonly app = express()
    private readonly port: number
    private readonly routes: Router

    constructor(options: ServerOptions) {
        this.port = options.port || 5005
        this.routes = options.router
    }

    public async start() {
        this.app.use(helmet())
        this.app.use(cors({ origin: '*' }))
        this.app.use(json())
        this.app.use(morgan('short'))

        this.app.use('/hc', (req: Request, res: Response) => {
            return res.status(200).json({
                status: 'online',
                httpCode: 200,
                online: true,
            })
        })

        // user defined routes
        this.app.use(this.routes)

        // listen on the selected port
        this.app.listen(this.port, () => {
            console.log(`server Started at http://localhost:${this.port}`)
        })
    }
}

import express, { Request, Response, json } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

export interface ServerOptions {
    port?: number
}

export class Server {
    public readonly app = express()
    private readonly port: number

    constructor(options: ServerOptions) {
        this.port = options.port || 5005
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

        this.app.listen(this.port, () => {
            console.log(`server Started at http://localhost:${this.port}`)
        })
    }
}

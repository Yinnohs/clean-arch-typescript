import { config } from 'dotenv'

export class GlobalConfiguration {
    public readonly serverPort: number

    constructor() {
        config()
        this.serverPort = parseInt('' + process.env.SERVER_PORT, 10)
    }
}

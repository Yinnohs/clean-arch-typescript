import { GlobalConfiguration } from './config'
import { Server, ServerOptions } from './presentation/server'

async function startApplication() {
    const globalConfig = new GlobalConfiguration()

    const options: ServerOptions = {
        port: globalConfig.serverPort,
    }

    const server = new Server(options)

    await server.start()
}

startApplication()

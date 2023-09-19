import { GlobalConfiguration } from './config'
import { GlobalRouter } from './presentation/Routes'
import { Server, ServerOptions } from './presentation/server'

async function startApplication() {
    const globalConfig = new GlobalConfiguration()

    const options: ServerOptions = {
        port: globalConfig.serverPort,
        router: GlobalRouter.routes,
    }

    const server = new Server(options)

    await server.start()
}

startApplication()

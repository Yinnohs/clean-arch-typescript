import { startServer } from './app'

const SERVER_PORT: number = parseInt('' + process.env.SERVER_PORT, 10) || 5005

startServer(SERVER_PORT)

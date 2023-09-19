export class customError extends Error {
    constructor(
        public readonly statusCode: number,
        public readonly message: string
    ) {
        super(message)
    }

    static badRequest(message: string) {
        return new customError(400, message)
    }

    static unauthorize(message: string) {
        return new customError(401, message)
    }

    static forbidden(message: string) {
        return new customError(403, message)
    }

    static notFound(message: string) {
        return new customError(404, message)
    }

    static internalServerError(message: string = 'Internal Server Error') {
        return new customError(500, message)
    }
}

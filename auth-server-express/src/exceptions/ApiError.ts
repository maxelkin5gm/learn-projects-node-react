export class ApiError extends Error {
    constructor(public statusCode: number, message: string) {
        super(message);
    }

    static UnauthorizedError(message: string = '401 Unauthorized') {
        return new ApiError(401, message)
    }

    static BadRequest(message:string = "Bad Request") {
        return new ApiError(400, message);
    }

    static NotFound(message: string = "Not Found") {
        return new ApiError(404, message)
    }

}
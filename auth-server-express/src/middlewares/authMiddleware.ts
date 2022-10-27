import {NextFunction, Request, Response} from "express";
import {TokenService} from "../services/TokenService";
import {ApiError} from "../exceptions/ApiError";


export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) return next(ApiError.UnauthorizedError('Token not found'))

    const jwtPayload = TokenService.verifyToken(token)
    if (!jwtPayload) return next(ApiError.UnauthorizedError('Token not valid'))

    res.locals.jwtPayload = jwtPayload
    next()
}
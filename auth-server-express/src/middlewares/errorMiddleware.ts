import {NextFunction, Request, Response} from "express";
import {ApiError} from "../exceptions/ApiError";
import {LogUtility} from "../utilities/LogUtility";


export function errorMiddleware(err: any, req: Request, res: Response, _: NextFunction) {
    LogUtility.infoError(err)
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({statusCode: err.statusCode, message: err.message})
    }
    return res.status(500).json({message: 'Непредвиденная ошибка'})
}
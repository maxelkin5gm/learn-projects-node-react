import {NextFunction, Request, Response} from "express";
import {db} from "../index";
import {AuthService} from "../services/AuthService";
import {ApiError} from "../exceptions/ApiError";

export class UserController {

    static async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            res.json(await db.getAllUsers());
        } catch (e) {
            next(e);
        }
    }

    static async getUserByToken(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = AuthService.getUserId(res)
            const user = await db.getUser(userId)
            user ? res.json(user) : next(ApiError.NotFound('User not found'))
        } catch (e) {
            next(e);
        }
    }

    static async getUserById(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await db.getUser(req.params.id)
            user ? res.json(user) : next(ApiError.NotFound('User not found'))
        } catch (e) {
            next(e);
        }
    }
}
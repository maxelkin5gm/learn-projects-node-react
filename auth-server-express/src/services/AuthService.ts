import {UserAuthData, UserPersonalData} from "../models/User";
import {db} from "../index";
import {TokenService} from "./TokenService";
import {ApiError} from "../exceptions/ApiError";
import {Response} from "express";


export class AuthService {

    static async createUser(userData: UserAuthData & UserPersonalData) {
        const user = await db.createUser(userData)
        return {
            tokens: TokenService.generateTokens({id: user.id, email: user.email}),
            user
        }
    }

    static async validateUser(userAuthData: UserAuthData) {
        const user = await db.findByEmail(userAuthData.email)
        if (user && user.password === userAuthData.password)
            return {
                tokens: TokenService.generateTokens({id: user.id, email: user.email}),
                user
            }
        else
            throw ApiError.NotFound('User not valid')
    }

    static async refresh(refreshToken: string) {
        const jwtPayload = TokenService.verifyRefreshToken(refreshToken)
        if (!jwtPayload) throw ApiError.UnauthorizedError('Token not valid')
        return {
            tokens: TokenService.generateTokens({id: jwtPayload.id, email: jwtPayload.email}),
            user: {id: jwtPayload.id, email: jwtPayload.email}
        }
    }

    static setCookie(res: Response, refreshToken: string) {
        res.cookie('refreshToken', refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
    }
    static clearCookie(res: Response) {
        res.clearCookie('refreshToken')
    }

    static getUserId(res: Response): string {
        const userId: string = res.locals?.jwtPayload?.id
        if (!userId) throw ApiError.UnauthorizedError()
        return userId
    }
}
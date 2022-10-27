import {NextFunction, Request, Response} from "express";

import {AuthResponseDto} from "../dtos/auth/AuthResponseDto";
import {UserAuthData, UserPersonalData} from "../models/User";
import {registrationSchema} from "../dtos/auth/validSchemes/registrationSchema";
import {ApiError} from "../exceptions/ApiError";
import {AuthService} from "../services/AuthService";
import {loginSchema} from "../dtos/auth/validSchemes/loginSchema";
import {TokenService} from "../services/TokenService";


export class AuthController {

    static async registration(req: Request<undefined, AuthResponseDto, UserAuthData & UserPersonalData>,
                              res: Response<AuthResponseDto>, next: NextFunction) {
        const {error, value: userData} = registrationSchema.validate(req.body)
        if (error || !userData) return next(ApiError.BadRequest('Not valid data'))

        try {
            const {tokens, user} = await AuthService.createUser(userData)
            AuthService.setCookie(res, tokens.refreshToken)
            res.json({
                token: tokens.accessToken,
                user: {
                    id: user.id,
                    email: user.email,
                }
            })
            console.log(user)
        } catch (e) {
            next(e)
        }
    }

    static async login(req: Request<undefined, AuthResponseDto, UserAuthData>,
                       res: Response<AuthResponseDto>, next: NextFunction) {
        const {error, value: userAuthData} = loginSchema.validate(req.body)
        if (error || !userAuthData) return next(ApiError.BadRequest('Not valid data'))

        try {
            const {tokens, user} = await AuthService.validateUser(userAuthData)
            AuthService.setCookie(res, tokens.refreshToken)
            res.json({
                token: tokens.accessToken,
                user: {
                    id: user.id,
                    email: user.email
                }
            })
        } catch (e) {
            next(e)
        }
    }

    static async refresh(req: Request, res: Response<AuthResponseDto>, next: NextFunction) {
        try {
            const {refreshToken} = req.cookies;
            if (!refreshToken) return next(ApiError.BadRequest("Token not found"))
            const {tokens, user} = await AuthService.refresh(refreshToken)
            AuthService.setCookie(res, tokens.refreshToken)
            res.json({
                token: tokens.accessToken,
                user: {
                    id: user.id,
                    email: user.email
                }
            })
        } catch (e) {
            next(e)
        }
    }

    static async logout(req: Request, res: Response<void>, next: NextFunction) {
        try {
            const {refreshToken} = req.cookies;
            await TokenService.removeRefreshToken(refreshToken)
            AuthService.clearCookie(res)
            res.status(200).send()
        } catch (e) {
            next(e)
        }
    }
}
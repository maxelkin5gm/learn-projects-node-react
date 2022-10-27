import {Router} from "express";
import {AuthController} from "../controllers/AuthController";


export const authRouter = Router()

authRouter.post('/registration', AuthController.registration)
authRouter.post('/login', AuthController.login)
authRouter.get('/refresh', AuthController.refresh)
authRouter.post('/logout', AuthController.logout)
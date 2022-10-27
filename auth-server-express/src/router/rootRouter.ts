import {Router} from 'express'
import {authRouter} from "./authRouter";
import {userRouter} from "./userRouter";


export const rootRouter = Router()

rootRouter.use('/', userRouter)
rootRouter.use('/auth', authRouter)



import {Router} from "express";
import {UserController} from "../controllers/UserController";
import {authMiddleware} from "../middlewares/authMiddleware";


export const userRouter = Router()

userRouter.get('/users', authMiddleware, UserController.getUsers)
userRouter.get('/user', authMiddleware, UserController.getUserByToken)
userRouter.get('/user/:id', authMiddleware, UserController.getUserById)
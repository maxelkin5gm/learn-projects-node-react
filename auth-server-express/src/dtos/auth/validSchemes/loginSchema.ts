import Joi from "joi";
import {UserAuthData} from "../../../models/User";

export const loginSchema = Joi.object<UserAuthData>({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required()
})
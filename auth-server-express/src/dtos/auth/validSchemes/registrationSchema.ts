import Joi from "joi";
import {UserAuthData, UserPersonalData} from "../../../models/User";

export const registrationSchema = Joi.object<UserAuthData & UserPersonalData>({
    email: Joi.string().email().required(),
    name: Joi.string().min(3).required(),
    password: Joi.string().min(3).required()
})

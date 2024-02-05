import Joi from "joi";

export const sessionPostSchema = Joi.object({
    email: Joi.string().email().min(5).max(50).required(),
    password:Joi.string().min(5).max(50).required(),
})
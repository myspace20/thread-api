import Joi from "joi";

export const postTypePostSchema = Joi.object({
    type_name:Joi.string().min(5).max(50).required()
})

export const postTypeParamSchema = Joi.object({
    id:Joi.string().uuid().required()
})
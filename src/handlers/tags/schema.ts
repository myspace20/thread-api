import Joi from "joi";

export const tagPostSchema = Joi.object({
  tag_name: Joi.string().min(5).max(50).required(),
  tag_description: Joi.string().min(5).max(100).required(),
});

export const tagParamSchema = Joi.object({
  id: Joi.string().uuid().required(),
});

export const tagPatchSchema = Joi.object({
  tag_name: Joi.string().min(5).max(50).required(),
  tag_description: Joi.string().min(5).max(100).required(),
}).or("tag_name", "tag_description");

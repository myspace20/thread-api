import Joi from "joi";

export const commentParamSchema = Joi.object({
  id: Joi.string().uuid().required(),
});

export const commentPostSchema = Joi.object({
  created_by_user_id: Joi.string().uuid().required(),
  post_id: Joi.string().uuid().required(),
  comment_text: Joi.string().required().min(15).max(1000),
});

export const commentPatchSchema = Joi.object({
  comment_text: Joi.string().required().min(15).max(1000),
});

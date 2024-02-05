import Joi, { string } from "joi";

export const answerParamSchema = Joi.object({
  id: Joi.string().uuid().required(),
});

export const answerPostSchema = Joi.object({
  answer_details: Joi.string().required().min(15).max(1000),
  created_by_user_id: Joi.string().uuid().required(),
  parent_question_id: Joi.string().uuid().required(),
  post_type_id: Joi.string().uuid().required(),
});

export const answerPatchSchema = Joi.object({
  answer_details: Joi.string().required().min(15).max(1000),
});

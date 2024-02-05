import Joi from "joi";

export const votePostSchema = Joi.object({
  post_id: Joi.string().uuid().required(),
  user_id: Joi.string().uuid().required(),
  vote_type_id: Joi.string().uuid().required(),
});

export const voteParamSchema = Joi.object({
  id: Joi.string().uuid().required(),
});

export const votePatchSchema = Joi.object({
  vote_type_id: Joi.string().uuid().required(),
});

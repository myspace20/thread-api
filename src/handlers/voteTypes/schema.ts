import Joi from "joi";

export const voteTypeParamsSchema = Joi.object({
  id: Joi.string().uuid().required(),
});

export const voteTypePostSchema = Joi.object({
  vote_type: Joi.string().required().min(2).max(20),
});

export const voteTypePatchSchema = Joi.object({
  vote_type: Joi.string().required().min(2).max(20),
});

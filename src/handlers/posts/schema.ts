import Joi from "joi";

export const postParamSchema = Joi.object({
  id: Joi.string().uuid().required(),
});

export const postPostSchema = Joi.object({
  postDetails: Joi.object({
    // accepted_answer_id: Joi.string().uuid().required(),
    created_by_user_id: Joi.string().uuid().required(),
    // parent_question_id: Joi.string().uuid().required(),
    post_type_id: Joi.string().uuid().required(),
    post_title: Joi.string().required().min(10).max(100),
    post_details: Joi.string().required().min(15).max(1000),
  }),
  postTags: Joi.array().items(Joi.string().uuid().required()),
});

export const questionAnswerPatchSchema = Joi.object({
  answerId: Joi.string().uuid().required(),
  postId: Joi.string().uuid().required(),
});

export const postPatchSchema = Joi.object({
  post_type_id: Joi.string().uuid().required(),
  post_title: Joi.string().required().min(10).max(100),
  post_details: Joi.string().required().min(15).max(1000),
}).or(' post_type_id','post_title','post_details');

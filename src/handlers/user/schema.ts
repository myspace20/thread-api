import Joi from "joi";

export const userPostSchema = Joi.object({
  email: Joi.string().email().min(5).max(50).required(),
  display_name: Joi.string().min(5).max(20).required(),
  password_hash: Joi.string().min(8).max(20).required(),
  about_me: Joi.string().min(5).max(200).required(),
  location: Joi.string().min(5).max(50).required(),
});

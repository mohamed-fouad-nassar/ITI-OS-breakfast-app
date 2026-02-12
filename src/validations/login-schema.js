import Joi from "joi";

export default Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email",
    "string.empty": "Email is required",
  }),
  password: Joi.string().min(6).required().messages({
    "string.empty": "Password is required",
  }),
});

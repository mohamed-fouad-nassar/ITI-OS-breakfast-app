import Joi from "joi";

export default Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).messages({
    "string.pattern.base":
      "Password must contain uppercase, lowercase and a number",
  }),
  confirmPass: Joi.string().valid(Joi.ref("password")).required().messages({
    "any.only": "Passwords do not match",
  }),
});

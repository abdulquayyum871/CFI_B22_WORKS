import { body, validationResult } from "express-validator";

function registervalidation() {
  return [
    body("username", "Username is required").notEmpty(),
    body("password", "password is required")
      .notEmpty()
      .isStrongPassword()
      .isLength({ min: 5 }),
    body(
      "location",
      "Location is required and must have 1 upper and lower and 1 special character and more than 9"
    ).notEmpty(),
    body("phone", "Phone number is required").isMobilePhone(),
    body("password2").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password do not match Please Check");
      }
      return true;
    }),
  ];
}


function loginvalidation() {
  return [
    body("email", "email is required").isEmail(),
    body("password", "password is required").notEmpty(),
  ];
}

function addTaskValidations(){
    return[
        body('todoName', "Task Name is Required ").notEmpty(),
    ]
}


function errorvalidation(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
}

export { addTaskValidations,registervalidation, loginvalidation, errorvalidation };

import { body, validationResult } from "express-validator";

function uservalidation(){
    return [
        body("username","Username is required").notEmpty().isLength({min:3}),
        body("email","Email is Required").isEmail(),
        body("phone","Phone no is required").isMobilePhone(),
        body("location","Location is Required").notEmpty(),
        body("password","Password must have 1 lowercase 1 uppercase 1 symbol and length should be more than 8").isStrongPassword(),
        body('password2').custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Password confirmation does not match password');
            }
            // Indicates the success of this synchronous custom validator
            return true;
        })
    ]
}


function userLoginValidation(){
    return[
        body("email","Email is required").isEmail(),
        body("password","password not entered").notEmpty()
    ]
}

function errorValidator(){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    return next();
}

export {uservalidation,userLoginValidation,errorValidator}
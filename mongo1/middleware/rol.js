const { handleHttpError } = require( "../utils/handleHttpError");
const checkRol = (roles) => (req, res, next) => {
    try {
        const {user} = req;
        const userRol = user.role;
        const checkValueRol = roles.includes(userRol) //comporbamos que esta en roles el user

        if(!checkValueRol){
            handleHttpError(res, "NOT_ALLOWED",403);
            return
        }
        next();
    }catch(err) {
        handleHttpError(res, "ERROR_ROL_NO_AUTORIZADO", 403);
    }

}


module.exports = { checkRol };
const { handleHttpError } = require("../utils/handleHttpError.js");
const customHeader = (req, res, next) => {
    try{
        const apiKey = req.headers.api_key;
        if(apiKey === process.env.API_KEY){
            next()
        }else{
            //res.status(403).send('nvalid API Key')
            handleHttpError(res, 'ERROR_API_KEY_INTRODUCIDA', 403);
            console.log('ERROR_API_KEY_INTRODUCIDA');
        }
    }catch(err){
        //res.status(403).send(err)
        handleHttpError(res, 'ERROR_PROCESO_AUTENTICACION_API_KEY', 403);ç
        console.log('ERROR_PROCESO_AUTENTICACION_API_KEY');
    }

}

module.exports = customHeader;
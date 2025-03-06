
const middlewareAviso = (req, res, next) => {
console.log(request.headers);
next();
}


module.exports = { middlewareAviso} 
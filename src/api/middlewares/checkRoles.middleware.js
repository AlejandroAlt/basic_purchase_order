
function checkRoles(req, res, next){
    console.log(req.user);
    const user = req.user;
    if (user.role === 3) {
        next()
    } else {
        return res.status(401).json({
            statusCode: 401,
            message: 'No autorizado',
        });
    }
}

module.exports = { checkRoles }
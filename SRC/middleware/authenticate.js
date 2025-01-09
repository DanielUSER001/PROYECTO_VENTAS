const supabase = require("../config/supabase")
exports.authenticate = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]
    if(!token){
        return res.status(401).json({
            message: "TOKEN NO ENCOTRADO O NO VALIDO"
        })
    }

    const {data:{user}, error} = await supabase.auth.getUser(token);
    if(!user || error){
        return res.status(401).json({
            error: "Unauthorized",
            message:  error.message

        })
    }
    req.user = user
    next()
    
    
}

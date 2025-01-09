const supabase = require("../config/supabase")

const signUp = async(req, res) =>{
    const {email, password} = req.body
    const { data, error } = await supabase.auth.signUp({email, password})
    if(error) res.status(400).json({
        message: "error al crear el usuario",
        error: error.message

    })
    res.status(200).json({
        message:"usuario creado correctamente",
        data: data.user
    })
}

const signIn = async(req, res) =>{
    const {email, password} = req.body
    const { data, error } = await supabase.auth.signInWithPassword({email, password})
    if(error) res.status(400).json({
        message: "error al iniciar sessión",
        error: error.message

    })
    res.status(200).json({
        message:"se inicio sessión correctamente",
        session: data.session
    })
}

const signOut = async(req, res) => {
    const { error } = await supabase.auth.signOut()
    if(error) {
        res.status(400).json({
            message: error.message,
            status: error.status
        })
    }
    res.status(200).json({
        message: "sessón cerrada exitosamente"
    })

}

module.exports = {
    signIn,
    signUp,
    signOut
}
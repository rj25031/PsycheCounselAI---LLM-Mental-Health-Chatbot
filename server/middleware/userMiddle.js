import jwt from 'jsonwebtoken';
const validToken = async (req,res,next)=>{
    const token = req.cookies.token
    if(!token){
        return res.status(401).send({
            success:false,
            message:'token not found please send a token',
        })
    }
    try {
        const decode = await jwt.verify(token,process.env.secret_key)
        req.user = decode.user
        next();
    } catch (error) {
        res.status(500).send({
            message:error.message,
        })
    }
}

export default validToken;
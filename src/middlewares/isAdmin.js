import jwt from 'jsonwebtoken'

const isAdmin = (req,res,next) =>{
    const token = req.headers.authorization?.split(" ")[1]
    
    console.log(token)


    if(token){
        const decodedToken = jwt.verify(token,process.env.JWT_SECRET)
        console.log(decodedToken)
        const {role} = decodedToken 

        if(role == 1) next()
        else return res.json({
            message: "ACCESS DENIED"
    })
    }else{
        return res.json({
            message: "UNAUTHORIZED",
            
            
        })
    }
}

export default isAdmin

//ADMIN TOKEN = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzFjZDY3MjlmZTkwM2MxYzgyZTJiOTciLCJyb2xlIjoxLCJpYXQiOjE3Mjk5NDg5MTYsImV4cCI6MTcyOTk1MjUxNn0.itpBFF2gQMDt_b-cllm9deSEh4K5db7EWmtfsoD7YNo

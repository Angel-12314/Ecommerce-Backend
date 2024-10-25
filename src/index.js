import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app =  express()

const port = process.env.PORT || 3000

app.listen(port, (req,res) => {
    console.log(`Server listening at port ${port}`)
})
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './services/mongodb/connectDB'
import cors from 'cors'
import authRoutes from './routes/authRoutes'
import CategoryRoutes from './routes/CategoryRoutes'

import productRoutes from './routes/productRoutes'
dotenv.config()

const app =  express()
const port = process.env.PORT || 3000
connectDB()

app.use(cors())
app.use(express.json())


//route to handle auth requests
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/Category", CategoryRoutes)
app.use("/api/v1/product", productRoutes)

app.listen(port, (req,res) => {
    console.log(`Server listening at port ${port}`)
})
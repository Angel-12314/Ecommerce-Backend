import mongoose from 'mongoose'

const connectDB =async ()=>{
    const connectionString = process.env.DB_URL
    try{
        await mongoose.connect(connectionString)
        console.log('connect to the DB !!! ')
    } catch(error){
        console.log(`couldn't connect to the Database :${error.message}`)
        console.log(error.message)
    }
}



export default connectDB;
import express from 'express'
import Category from '../services/mongodb/models/Category'
import {body,validationResult} from 'express-validator'
const router = express.Router()

/*
type : GET
path : /api/v1/category/all
params : none
isProtected : false(public)
*/

router.get('/all', async (req,res)=>{
    const {Categories} = req.body
    try{
        const Categories = await Category.find({})
        return res.status(200).json({Categories, message:"Successfully fetched categories"})
    }catch{error}{
        console.log(error.message)
        return res.status(500).json({Categories:[], message:"error fetching categories"})
    }
})

/*
type : POST
path : /api/v1/category/all
params : none
isProtected : true(admin)
*/

router.post('/add', body('name').isLength({min:1}),
body('description').isLength({min:10}),
async (req,res)=>{
    const {errors}=validationResult(req)
    if(errors.length > 0) return res.status(403).json({errors,message : "Bad request"})
    try{
        const category = new Category(req.body);
        await category.save()
        res.status(200).json({
            category, message:"Saved category in DB"
        })
        
    }catch(error){
        res.status(500).json({
            category:null,
            message:"Unable able to save category in DB"
            
        })
        console.log({error})
        
    }
    
})

/*
type : PUT
path : /api/v1/category/update/:id
params : none
isProtected : private(admin)
*/

router.put('/update/:id', async (req,res)=>{
    const {id}= req.params
    try{
        const category = await Category.findOneAndUpdate({_id: id},req.body,{new:true})
        res.status(200).json({
            category, message:"Updated category in DB"
        })
        
    }catch(error){
        return res.status(500).json({
            category:null,
            message:"Unable able to Update category in DB"
            
        })
        console.log({error})
        
    }
    
})

/*
type : DELETE
path : /api/v1/category/delete/:id
params : none
isProtected : private(admin)
*/

router.delete('/delete/:id', async (req,res)=>{
    const {id}= req.params
    try{
        const category = await Category.findByIdAndDelete(id)
        res.status(200).json({
            category, message:"Deleted category in DB"
        })
        
    }catch(error){
        console.log(error)
        return res.status(500).json({
            category:null,
            message:"Unable to Delete category in DB"
            
        })
        
        
    }
    
})


export default router
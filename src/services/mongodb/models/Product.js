import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    price :{
        type: Number,
        required: true
    },
    listPrice :{
        type: Number,
        required: true
    },
    description :{
        type: String,
        required: true
    },
    color :{
        type: String,
        required: true
    },
    compatibleWith :[
        {
            type: String,
        }
    ],
    category :{
        type: mongoose.Types.ObjectId,
        ref: "category"
    },
    imageUrl :{
        type: String,
    },
    stock :{
        type: String,
        required: true
    },
    /*reviews :[
        {
            type: mongoose.Types.ObjectId,
            ref: "reviews"
        }*/
   //]
})

const Product = mongoose.model("Product", ProductSchema)
//6720ae243c2fb6918239024c
export default Product

/*
{
  "name":"iPhone 13 case",
  "price":"1500",
  "listPrice":"1300",
  "description":"This is a description for phone case",
  "stock":"50",
  "category":"6720ae243c2fb6918239024c",
  "color":"red",
  "compatibleWidth":["iPhone13","iPhone12"]
}
*/
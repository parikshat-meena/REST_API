const mongoose = require('mongoose');
const Product = require('../model/product')

exports.deleteProduct = async(req,res)=>{
    try{
        const product = await Product.findByIdAndDelete(req.params.productId)
        res.status(200).json({
            msg: "document deleted successfully",
            data: product
        })
    }catch(err){
        res.status(501).json({
            msg: "something went wrong",
            err: err
        })
    }
}

exports.updateProduct = async(req,res)=>{
    try{
        const product = await Product.findByIdAndUpdate(req.params.productId,req.body)
        res.status(200).json({
            msg: "documents updated successfully",
            data: product
        })
    }catch(err){
        res.status(501).json({
            msg: "Something went wrong in update",
            err: err
        })
    }
}

exports.getProduct = async(req,res,next)=>{
    try{
     
        const product = await Product.findById(req.params.productId);
        res.status(200).json({
            msg: "documents fetched successfully",
            data: product
        })
    }catch(err){
        res.status(501).json({
            code: 0,
            msg: " Something went wrong",
            err: err
        })
    }
}

exports.getProducts = async(req,res,next)=>{
    try{
        const products = await  Product.find();
        res.status(200).json({
            msg: "All documents fetched successfully",
            data: products
        })
    }catch(err){
        res.status(501).json({
            code: 0,
            msg: " Something went wrong",
            err: err
        })
    }
}

exports.createProduct = async (req,res,next)=>{
    try{
        const product = new Product ({
            _id: new mongoose.Types.ObjectId,
            name: req.body.name,
            price: req.body.price
        })

        const data = await product.save(); // calling the save method and waiting for it to return
       // if it reaches this line, means save was successfull
        res.status(200).json({
            msg: "Product created successfully",
            product: data
        })
    }catch(err){// if it reaches this line, means save() failed.
        res.status(200).json({
            code: 0,
            msg: "something went wrong",
            err:err
       })
    }
}
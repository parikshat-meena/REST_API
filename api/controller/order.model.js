
const mongoose = require('mongoose')
const Order = require('../model/order')

exports.getOrder = async (req,res)=>{
    try{
        const order = await Order.find()
        res.status(200).json({
            msg: "Orders fetched successfully",
            data: order
        })
    }
    catch(err){
        res.status(501).json({
            msg: "Something went wrong",
            err: err
        })
    }
}

exports.getOrderById = async(req,res)=>{
    try{
        const order = await Order.findById(req.params.orderId)
        res.status(200).json({
            msg:"Single order fetched successfully",
            data : order
        })
    }
    catch(err){
        res.status(501).json({
            msg:" something went wrong",
            err: err
        })
    }

}
exports.createOrder = async(req,res)=>{
    try{
        const order = new Order({
            _id: new mongoose.Types.ObjectId,
            quantity: req.body.quantity,
            address: req.body.address
        })

        const data = await order.save();

        res.status(200).json({
            msg: "order created successfully",
            product: data
        })
    }catch(err){
        res.status(501).json({
            msg: " something went wrong while creating order",
            err: err
        })
    }
}
exports.updateOrder = async(req,res)=>{
    try{
        const order = await Order.findByIdAndUpdate(req.params.orderId,req.body)
        res.status(200).json({
            msg:"order updated successfully",
            data: order
        })
    }catch(err){
        res.status(501).json({
            msg:"something went wrong while updating order",
            err: err
        })
    }
}
exports.deleteOrder = async(req,res)=>{
    try{
        const order = await Order.findByIdAndDelete(req.params.orderId)
        res.status(200).json({
            msg: "order deleted successfully",
            data : order
        })
    }catch(err){
        res.status(501).json({
            msg: "something went wrong while deleting order",
            err: err
        })
    }
}

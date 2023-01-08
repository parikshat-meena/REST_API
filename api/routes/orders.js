const express = require('express')
const Order = require('../model/order')
const router = express.Router()
const mongoose = require('mongoose')

const orderRouter = require('../controller/order.model')
const order = require('../model/order')

router.get('/', orderRouter.getOrder
// (req,res,next)=>{
//     res.status(200).json({
//         msg:"This is GET request for orders"
//     })
// }
)

router.get('/:orderId', orderRouter.getOrderById
// (req,res,next)=>{
//     res.status(200).json({
//         msg: "This is GET request for single order"
//     })

    
// }
)

router.post('/',orderRouter.createOrder
// (req,res,next)=>{
//     const order = new Order({
//         _id: new mongoose.Types.ObjectId(),
//         "quantity": req.body.quantity,
//         "address": req.body.address
//     })
//     order.save().then((res)=>{
//         console.log(res)
//     }).catch((err)=>{
//     console.log(err)        
//     })
//     res.status(200).json({
//         msg: "Order created successfully!!",
//         order: order
//     })
// }
)

router.put('/:orderId',orderRouter.updateOrder
// (req,res,next)=>{
//     const id = req.params.orderId
//     res.status(200).json({
//         msg: "This is PUT request for order",
//         id: id
//     })
// }
)
router.delete('/:orderId', orderRouter.deleteOrder
// (req,res,next)=>{
//     const id = req.params.orderId
    
//     res.status(200).json({
//         msg: "This is DELETE request for order",
//         id: id
//     })
// }
)

module.exports = router
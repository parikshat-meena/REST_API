const mongoose = require('mongoose')
const schema = mongoose.Schema

const orderSchema = schema({
    _id: schema.Types.ObjectId,
    quantity:{type:Number,require: true},
    address:{type:String,require:true}
})

module.exports = mongoose.model("Order",orderSchema)
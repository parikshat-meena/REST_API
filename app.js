require('dotenv').config()
const express = require('express')
const app = express()

const productsRouter = require('./api/routes/products') 
const ordersRouter = require('./api/routes/orders')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const username = process.env.dbuser
const password = process.env.dbpassword

// connect to mongo database (deployed on mongo atlas cloud services)
const connectionString = "mongodb+srv://" + username+":" + password+"@cluster0.frtesud.mongodb.net/test"
mongoose.connect(connectionString)


// app.use((req,res)=>{
//     res.status(200).json({
//         msg: "This is a simple get request"
//     })
// })

// setup a body parser middleware to handle encoded url and json data
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))
app.use(morgan("dev"))
app.use('/products',productsRouter)
app.use('/orders',ordersRouter)
module.exports= app
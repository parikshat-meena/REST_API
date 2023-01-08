require('dotenv').config()
const mongoose = require('mongoose')
const username= process.env.dbname
const password = process.env.password
const connectionString = "mongodb+srv://" + username+":" + password+"@cluster0.frtesud.mongodb.net/test"
mongoose.connect(connectionString)

.then(()=>{
    console.log("Connection established successfully...")
})
.catch(()=>{
    console.log("Error connecting...")
})
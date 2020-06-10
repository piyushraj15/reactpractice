const express=require('express')
const app=express()
const router=require('./route/route')
const bodyParser=require('body-parser')
const cors =require("cors")

app.use(cors())


app.use(bodyParser.json())
app.use('/',router)







app.listen(4000)
console.log("h1 4000")


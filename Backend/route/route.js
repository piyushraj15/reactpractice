const express=require('express')
const routing=express.Router()

var data=[
    {id:101,name:"Piyush",age:24},
    {id:102,name:"Madhu",age:24},
    {id:103,name:"Angad",age:24},
    {id:104,name:"Aakash",age:24},
    {id:105,name:"Satyam",age:24}
]



routing.post('/addEmp',(req,res,next)=>{
    console.log(req.body)
   data.push(req.body)
   res.redirect('https://nodejs.org/en/')
//    res.send({message:"success"})   

                              
});
// routing.get('/addEmp',(req,res)=>{
//     console.log("Asd")
//     res.redirect('http://localhost:3000/show')
// })

routing.get('/userid',(req,res,next)=>{
    console.log("Asd")
    res.redirect('https://nodejs.org/en/')                              
});

routing.put('/delete',(req,res,next)=>{
    for(let i=0;i<data.length;i++){
        if(data[i].id==req.body.id && data[i].name==req.body.name && data[i].age==req.body.age){
            data.splice(i,1)
            break;
        }
    }
    res.send(data)                               
});
routing.put('/update/:userId',(req,res,next)=>{
    console.log(req.body)
    for(let i=0;i<data.length;i++){
        if(data[i].id==req.body.id){
            data[i].name=req.body.name
            data[i].age=req.body.age
            break;
        }
    }
    res.send(data)                               
});
module.exports=routing
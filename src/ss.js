state={
    id:123,
    name:"Piyush",
    skill:{
          cid:123,
          cname:"Math"
    }
}

var{skill}=state


// skill.cid=11111
// console.log(id)
// console.log(name) 
// console.log(skill)

var ages=[11,2,43,65,13,42,64,2,33,5,8,32]

// var teen=ages.filter(age=>  ( age<18 && age>5) )
// console.log(teen)

// var inc=ages.sort((a,b)=> a-b)
// console.log(inc)
data=[
 {id: 101, name: "Piyush", age: 24},
 {id: 102, name: "Madhu", age: 24},
 {id: 103, name: "Angad", age: 24},
 {id: 104, name: "Aakash", age: 24},]

 const userInputObj={
    id:101,
    name:"Piyush",
    age:24
}

if(data[0].id===userInputObj.id){
    console.log("Yes")
}
else{
    console.log(data[0])
    console.log(userInputObj)
}

console.log(data)
console.log(data.pop(userInputObj))
console.log(data.indexOf(userInputObj))
console.log(typeof(userInputObj))
console.log(typeof(data[0]))
data.splice(1,1)
console.log(data)





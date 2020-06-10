import React, { Component, Fragment } from "react"
import Axios from "axios"

class Adduser extends Component {
    state = {  
        userId:"",name:"",age:"",
        validity:{userId: false,
             name: false,
             age:false},
        errMsg: { userId: '',
         name: '',
          age: '' },
        formvalid:false

    }
    handleclick = (e) => {
        const value=e.target.value
        const name=e.target.name
        this.setState({ [name]: value })//This is a special type of using obj[key] like this
      
        // this.setState({ userInput: e.target.value })
        // userInput.length>=4 ? this.state.userInputValid=true:this.state.userInputValid=false
       




          
        this.validate(name,value)
    }
    validate = (name,value) => {
        const{validity,errMsg}=this.state
        switch(name){
            case "name":
                value.length>5?
                validity.name=true:
                validity.name=false
                value.length>5?
                errMsg.name="":
                errMsg.name="More than 5 char....."
            break;
            case "userId":
                value>100?
                validity.userId=true:
                validity.userId=false
                value>100?
                errMsg.userId="":
                errMsg.userId="Invalid user id....."
            break;
            case "age":
                value>=18 && value<=65?
                validity.age=true:
                validity.age=false
                value>18 && value<65?
                errMsg.age="":
                errMsg.age="Invalid user Age 18-65....."
            break;

            default:
            break;
            

        }
      
        // if (value.length >= 4) {
        //     this.state.userInputValid = true
        //     this.state.InputErrMsg = ""
        // }
        // else {
        //     this.state.InputErrMsg = "Min char is 5"
        //     this.state.userInputValid = false
        // }
        (validity.userId && validity.name && validity.age)?
        this.state.formvalid=false:
        this.state.formvalid=true


    }
    handleSubmit=(e)=>{
        e.preventDefault();
        alert("I am amazing")




        const userInputObj={
            userId:this.state.userId,
            name:this.state.name,
            age:this.state.age
        }
        console.log("Post data::",userInputObj)


        const postUrl="http://localhost:4000/addEmp"
        const type="POST"



        Axios.post(postUrl,userInputObj)
        .then((good)=>{
            console.log(good)
            console.log("YAY:BAKEND CALL SUCCESS")
        })
        .catch((bad)=>{
            console.log(bad)
            console.log("YAY:BAKEND CALL fail")
        })

        

    }
    render() {
        const {userId,name,age,validity,errMsg,formvalid}=this.state
        return (
            <Fragment>
            {JSON.stringify(this.state)}
                <div className="col-4 offset-4">
                    
                    <form className="card" onSubmit={(e)=>{this.handleSubmit(e)}}>
                        <div className="card bg-light">
                            <div className="card-body">
                                <div className="form-group">
                                    <label>UserId</label>
                                    <input type="number" name="userId" className="form-control" value={userId} onChange={(e) => { this.handleclick(e) }} />
                                    {!validity.userId && (
                                        <p className="text-danger">{errMsg.userId}</p>
                                    )}

                                </div>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" className="form-control" value={name} onChange={(e) => { this.handleclick(e) }} />
                                    {!validity.name && (
                                        <p className="text-danger">{errMsg.name}</p>
                                    )}
                                   

                                </div>
                                <div className="form-group">
                                    <label>Age</label>
                                    <input type="number" name="age"  className="form-control" value={age} onChange={(e) => { this.handleclick(e) }} />
                                    {/* {!this.state.userInputValid && (
                                        <p className="text-danger">Err::{this.state.InputErrMsg}</p>
                                    )} */}
                                    {!validity.age && (
                                        <p className="text-danger">{errMsg.age}</p>
                                    )}

                                </div>
                                {/* <div className="form-group"> */}
                                <button disabled={formvalid} className="btn btn-primary btn-block">Submit</button>
                                {/* </div> */}
                            </div>
                        </div>


                    </form>
                </div>
            </Fragment>
        )
    }
}




export default Adduser
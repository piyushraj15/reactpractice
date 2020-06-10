import React, { Component, Fragment } from "react"
import Axios from "axios"
import { Route} from 'react-router-dom'

class Form extends Component {
    state = {
        userId: "", name: "", age: "",
        validity: {
            userId: false,
            name: false,
            age: false
        },
        errMsg: {
            userId: '',
            name: '',
            age: ''
        },
        formvalid: false,
        successMsg: "",
        errorMsg: ""

    }
    handleclick = (e) => {
        const value = e.target.value
        const name = e.target.name
        this.setState({ [name]: value })//This is a special type of using obj[key] like this

        // this.setState({ userInput: e.target.value })
        // userInput.length>=4 ? this.state.userInputValid=true:this.state.userInputValid=false
        this.validate(name, value)
    }
    validate = (name, value) => {
        const { validity, errMsg } = this.state
        switch (name) {
            case "name":
                value.length > 5 ?
                    validity.name = true :
                    validity.name = false
                value.length > 5 ?
                    errMsg.name = "" :
                    errMsg.name = "More than 5 char....."
                break;
            case "userId":
                value > 100 ?
                    validity.userId = true :
                    validity.userId = false
                value > 100 ?
                    errMsg.userId = "" :
                    errMsg.userId = "Invalid user id....."
                break;
            case "age":
                value >= 18 && value <= 65 ?
                    validity.age = true :
                    validity.age = false
                value > 18 && value < 65 ?
                    errMsg.age = "" :
                    errMsg.age = "Invalid user Age 18-65....."
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
        (validity.userId && validity.name && validity.age) ?
            this.state.formvalid = true :
            this.state.formvalid = false


    }
    submit = (e) => {
        e.preventDefault();
        const url = 'http://localhost:4000/addEmp'
        const userInputObj = {
            id: this.state.userId,
            name: this.state.name,
            age: this.state.age
        }
        Axios.post(url, userInputObj)
            .then((good) => {
                console.log("YAY POSTED")
                this.setState({ successMsg: "Employee with Id:" + this.state.userId + " added", errorMsg: null })

            }).catch((error) => {
                console.log("error")
                this.setState({ errorMsg: "Employee with Id:" + this.state.userId + " not added", successMsg: null })
            })


    }
    render() {
        const { userId, name, age, validity, errMsg, formvalid, successMsg, errorMsg } = this.state
        return (
            <Fragment>
                {/* {JSON.stringify(this.state)} */}
                <div className="row bg-dark">
                    <div className="col-8 offset-2">

                        <form className="card" onSubmit={(e) => { this.submit(e) }}>
                            <div className="card bg-light">
                                <div className="card-header">
                                    <h1 className="text-center">Form</h1>
                                </div>
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
                                        <input type="number" name="age" className="form-control" value={age} onChange={(e) => { this.handleclick(e) }} />
                                        {/* {!this.state.userInputValid && (
                                        <p className="text-danger">Err::{this.state.InputErrMsg}</p>
                                    )} */}
                                        {!validity.age && (
                                            <p className="text-danger">{errMsg.age}</p>
                                        )}

                                    </div>
                                    {/* <div className="form-group"> */}
                                    <button disabled={!formvalid} className="btn btn-primary btn-block">Submit</button>
                                    {/* </div> */}
                                </div>
                            </div>
                        
                            <span className="text-success font-weight-bold text-center">{successMsg}</span>
                            <span className="text-danger font-weight-bold text-center">{errorMsg}</span>

                            
                        </form>


                    </div>
                </div>
                
            </Fragment>
        )
    }
}




export default Form
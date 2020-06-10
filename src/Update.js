import React, { Component, Fragment } from 'react'
// import  {} from 'react-router-dom'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

export class Update extends Component {
    state = {
        name: "", age: "",
        validity: {
            name: false,
            age: false
        },
        errMsg: {
            name: '',
            age: ''
        },
        formvalid: false,
        submitbutton: true,
        homeButtonClicked: false


    }
    handleclick = (e) => {
        console.log(this.props.id)
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
        (validity.name && validity.age) ?
            this.state.formvalid = true :
            this.state.formvalid = false


    }


    submit = (e) => {
        e.preventDefault();//this is imp otherwise the page will go to initall page,this become imp if u r dealing with redirectings

        
        // const url = ('http://localhost:4000/update/' + this.props.match.params.userId)
        const url = ('http://localhost:4000/update/' + this.props.id)
        console.log(url)
        const userInputObj = {
            // id: this.props.match.params.userId,
            id: this.props.id,
            name: this.state.name,
            age: this.state.age
        }
        console.log("here1")
        Axios.put(url, userInputObj)
            .then((good) => {
                console.log("YAY POSTED")
                this.setState({ submitbutton: false })
                // this.setState({ submitstatus: true }) now I dont want redirecting I want a suucess message and Home button
            }).catch((error) => {
                console.log("Unable to update")
            })

        console.log("here2")

        //    if(this.state.submitstatus){
        //        console.log("iffff")
        //     this.redirect=<Redirect to={"/show"} />
        //     }
        //     else{
        //         console.log("else")
        //         this.redirect=null
        //     }


    }
    home = (e) => {
 e.preventDefault()
        this.setState({ homeButtonClicked: true })
    }





    render() {
        console.log("here render")
        const { name, age, validity, errMsg, formvalid, submitbutton } = this.state
        // if (this.state.submitstatus) {
        //     //        console.log("iffff")
        //     this.redirect = <Redirect to={"/show"} />
        // }
        if (this.state.homeButtonClicked) {
            //        console.log("iffff")
            this.redirectToHome = <Redirect to={"/"} />
        }
        return (

            <Fragment>

                <div className="col-8 offset-2 ">

                    <form className="card mt-4" onSubmit={(e) => { this.submit(e) }}>
                        <div className="card bg-light">
                            <div className="card-header bg-light">
                                <h3 className="text-center">Edit Id:{this.props.id}</h3>
                            </div>
                            <div className="card-body">
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
                                    {!validity.age && (
                                        <p className="text-danger">{errMsg.age}</p>
                                    )}
                                </div>
                                {submitbutton && (<button disabled={!formvalid} onClick={(e) => this.submit(e)} className="btn btn-primary btn-block">Submit</button>)}

                                <button onClick={(e) => this.home(e)} className="btn btn-warning btn-block">Home</button>

                            </div>
                        </div>

                    </form>
                </div>
                {this.redirect}
                {this.redirectToHome}
            </Fragment>
        )
    }
}

export default Update

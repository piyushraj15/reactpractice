import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { Route, Link, Redirect } from 'react-router-dom'
import Update from './Update'

// import Form from './Form'


class Table extends Component {
    state = {
        user: [],
        submitstatus: false,
        id: ''
    }
    componentDidMount = () => {
        axios.get('http://localhost:4000/userid')
            .then((user) => {
                console.log(user)
                this.setState(() => ({ user: user.data }));
            }).catch((error) => {
                console.log(error.message)
            })
    }
    delete = (user) => {
        console.log(user)
        const putlink = 'http://localhost:4000/delete'
        axios.put(putlink, user)
            .then((good) => {
                console.log(good.data)
                this.setState(() => ({ user: good.data }));
            }).catch((error) => {
                console.log(error.message)
            })
    }
    submitcheck = (e) => {
        this.state.id = e
        this.setState({ submitstatus: true })

    }


    render() {
        const { user, submitstatus, id } = this.state
        // console.log(this.state)
        // console.log("asd")
        if (submitstatus) {
            // this.redirect=<Redirect  to={'/update/'+id}/>
           return (  <Update id={id} /> ) // in this way we will able to render the page not redirect it
        }
        else {

            return (

                <Fragment>
                    {/* {JSON.stringify(this.state)} */}
                    <body className="bg-light">
                        <div className="col-8 offset-2">
                            <table className="table  table-hover table-striped table-bordered ">
                                <thead className="bg-light">
                                    <tr>
                                        <th className="text-center">Id</th>
                                        <th className="text-center">Name</th>
                                        <th className="text-center">Age</th>
                                        <th className="text-center">Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user.map((user, key) => (
                                        <tr key={key}>
                                            <td className="text-center">{user.id}</td>
                                            <td className="text-center">{user.name}</td>
                                            <td className="text-center">{user.age}</td>
                                            <td className="text-center">
                                                <button className="btn btn-warning" onClick={() => this.submitcheck(user.id)} >Update</button>
                                                <span className className="ml-1">
                                                    <button className="btn btn-danger" onClick={(e) => this.delete(user)}>Delete</button>
                                                </span>
                                            </td>

                                        </tr>))}
                                </tbody>
                            </table>

                        </div>
                    </body>
                    {/* {this.redirect} */}

                </Fragment>

            )
        }
    }
}

export default Table
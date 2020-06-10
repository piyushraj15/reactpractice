import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-md bg-primary navbar-dark">
                    <a className="navbar-brand">My First React</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">

                                <Link to="/show" className="nav-link">Show Details</Link>
                            </li>
                            <li className="nav-item">

                                <Link to="/" className="nav-link">Form</Link>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="#">Gallery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

export default Navbar

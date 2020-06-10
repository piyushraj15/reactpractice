import React, { Component, Fragment } from 'react'
import Decrement2 from './Decrement2'


class Decrement extends Component{
   decrement=this.props.decrement
   decrement2=this.props.decrement2
   state={
    counter:this.props.counter
   }


    render(){

        return(
            <Fragment>
                <button className="btn btn-danger" onClick={this.decrement}>Decrement</button>
                <Decrement2 decrement2={this.decrement2}/>
            </Fragment>
        )

    }
}

export default Decrement
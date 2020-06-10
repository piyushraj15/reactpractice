import React, { Component, Fragment } from 'react'



class Decrement2 extends Component{
   decrement2=this.props.decrement2


    render(){
        
        return(
            <Fragment>
                <button className="btn btn-warning" onClick={this.decrement2}>Decrement</button>
            </Fragment>
        )

    }
}

export default Decrement2
import React, { Component,Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import Adduser from './Adduser'
import axios from 'axios'
import Navbar from './Navbar';
import { Route, Redirect,Switch} from 'react-router-dom'
import Table from './Table';
import Update from './Update';
import Decrement from './Decrement'





class App extends Component {
  render() {
    return (
    <Fragment>
      <Navbar/>
      {/* <div className="container-fluid">
        {/* <div className="row ">
          <div className="col-8 offset-2">
          <h1 className="display-3 text-success text-center font-weight-bold">My First React!!</h1>
          </div>
          </div> */}
          {/* <hr/> */}
          {/* <div className="col-8 offset-2">
          <h1 className="display-3 text-danger text-center font-weight-bold"> Form</h1>
          </div>
          <div className="row">
          
          </div> 


        
      </div> */}
      <Switch>
      <Route exact path='/' component={Form}/>
      <Route exact path='/show' component={Table}/>
      <Route exact path='/update/:userId' component={Update}/>
      <Route exact path='/update/show' render={()=>(<Redirect to="/show"/>)}/>
      <Route exact path='/*' render={()=>(<Redirect to="/"/>)}/>
      </Switch>
    </Fragment>

 
    );
  }
}


class App_for_Add extends Component{
  state={
    counter:0
  }
  increment=()=>{

    this.setState({counter:this.state.counter+1})
  }
  decrement=()=>{
    this.setState({counter:this.state.counter-1})
  }
  decrement2=()=>{
    this.setState({counter:this.state.counter-2})
  }


  render(){
    return(
      <Fragment>
      <h1>{this.state.counter}</h1>
      <button className="btn btn-success" onClick={this.increment}>Increment</button>
      <Decrement decrement={this.decrement} decrement2={this.decrement2} counter={this.state.counter}/>
      </Fragment>)

    
  }

}

export default App;

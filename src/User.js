import React,{Component,Fragment} from 'react'
import Table from './Table'


var data=[
    {id:101,name:"Piyush",age:24},
    {id:102,name:"Madhu",age:24},
    {id:103,name:"Angad",age:24},
    {id:104,name:"Aakash",age:24},
    {id:105,name:"Aayush",age:24},
    {id:105,name:"Mradul",age:24},
    {id:105,name:"Vaishnav",age:24},
    {id:105,name:"Sakshi",age:24}
]

class User extends Component {
    render() {
      return (
      <Fragment>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-8 offset-2">
            <h1 className="display-3 text-success text-center font-weight-bold">My Second React!!</h1>
            </div>
            </div>
            <hr/>
            <div className="col-8 offset-2">
            <h1 className="display-3 text-danger text-center font-weight-bold"> Table</h1>
            </div>
            <div className="row">
            <Table obj={data}/>
            </div> 
  
  
          
        </div>
        
  
      </Fragment>
  
   
      );
    }
  }
  
  export default User;
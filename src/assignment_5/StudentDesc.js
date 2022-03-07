import React, { Component } from 'react'
import { Link  } from 'react-router-dom';
import "./Styleinput.css";


class StudentDesc extends Component {
  constructor(props){
    super(props)
    this.state = {
      name : "",
      age: "",
      course  : "",
      batch : ""
  
    }
    

  }
  
  change (){
    
    const temp_obj = {
      name : this.state.name,
      age : this.state.age,
      course : this.state.course,
      batch : this.state.batch,
      ID : this.props.data.length + 1
    }
    console.log(temp_obj);
    this.props.addingData(temp_obj);
   

    this.setState({
      name : "",
    age: "",
    course  : "",
    batch : ""
    })
  }

  render() {
    return (
    <>
      <form action="">
  <div className="input-field">
    <input type="text" onChange={(e) => {this.setState({name : e.target.value})}} id = "name" required />
    <label for = 'name' >Name:</label>
  </div>
  <div className="input-field">
    <input onChange={(e) => {this.setState({age : e.target.value})}} type="number" required id = "age"/>
    <label for="age" >Age:</label>
  </div>
  <div className="input-field">
    <input type="text" onChange={(e) => {this.setState({course : e.target.value})}} id = "course" required />
    <label for = "course">Course:</label>
  </div>
  <div className="input-field">
    <input type="text" onChange={(e) => {this.setState({batch : e.target.value})}} id = "batch" required />
    <label for = "batch">Batch:</label>
  </div>
</form>
<Link to = "/student"><button className='btn btn-outline-secondary edit'>Cancel</button></Link>
<Link to="/student"><button className='btn btn-success edit' id='bt1' onClick={this.change.bind(this)} >Submit</button></Link>
</>

    )
  }
}

export default StudentDesc
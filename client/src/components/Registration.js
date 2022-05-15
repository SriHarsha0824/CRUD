import React, { Component } from 'react'
import axios from 'axios'

const  initialState={
  name:'',
  age:0,
  address:'',
  gender:'',
  mobile_number:''
}

export default class Registration extends Component {
  constructor(){
    super();
    this.state=initialState
  }  
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleClick=()=>{
    //key will be mysql fields and value will be react state variables 
    const newStudent={
        name:this.state.name,
        age:this.state.age,
        address:this.state.address,
        gender:this.state.gender,
        mobile_number:this.state.mobile_number
      }
      axios.post("http://localhost:2005/add",newStudent);
      this.setState(()=>initialState)
    console.log(newStudent)
  }
  render() {
    return (
      <React.Fragment>
          <h1>Regsitration page</h1>
          <p><input 
            type="text"  
            name="name"
            placeholder="Enter your name"
            value={this.state.name}
            onChange={this.handleChange}/></p>
          <p><input 
            type="text"  
            name="age"
            placeholder="Enter your age"
            value={this.state.age}
            onChange={this.handleChange}/></p>
          <p><input 
            type="text"  
            name="address"
            placeholder="Enter your address"
            value={this.state.address}
            onChange={this.handleChange}/></p>
          <p><input 
            type="text"  
            name="gender"
            placeholder="Enter your gender"
            value={this.state.gender}
            onChange={this.handleChange}/></p>
          <p><input 
            type="text"
            placeholder="Enter mobile number"
            name="mobile_number"
            value={this.state.mobile_number}
            onChange={this.handleChange}/></p>
          <button onClick={this.handleClick}>Submit</button>
      </React.Fragment>
    )
  }
}

import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
class App extends Component {
  constructor(){
    super()
    this.state={firstName:'',lastName:'',data:[]}
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
 submit=()=>{
  let{firstName ,lastName,data}=this.state;
  data.push({firstName:firstName,lastName:lastName})
  this.setState({
    data
  })
  console.log(this.props)
  this.props.history.push({
    pathname:"/submit",
    state:data
})
 } 
  render() {
    return (
      <div>
       First Name:- <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}></input>
      
        Last Name:- <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}></input>

<button type="submit" onClick={this.submit}>Submit</button></div>
 );
  }
}

export default App;

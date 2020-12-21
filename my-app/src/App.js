import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import AddUsers from "./components/AddUser";
class App extends Component{


  
render(){

  return (

    <div className="container">
    
      <Navbar title="User App 2" />
      
      <hr></hr>
      <AddUsers/>  
      <Users/>
      

    </div>

  );
}
}
export default App;

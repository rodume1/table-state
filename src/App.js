/*
*App.js
*/
import React from "react";
import Table from "./Table";

class App extends React.Component{

  //data is defined as state
  //this means that data can be changed by app, in real time
  state = {
    students : [
    {
      name:"Ana",
      surname:"Graquio",      
    },
    {
      name:"Danil",
      surname:"Graqua",      
    },
    {
      name:"Refactor",
      surname:"Product",      
    },
    {
      name:"Rodrigo",
      surname:"Bendes",      
    },
  ]}

  render(){
    const{students} = this.state // <=>  const {students} = this.state.students

    return(
      <div className="container">
        <h1>Students</h1>
        <Table studentsDataIn={students}/>
      </div>
    )
  }
}

export default App;

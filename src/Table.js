/* 
*Table.js
*
*This table show a simple list of students
*/

import React,{Component} from "react";
/*
* write the table header
* @returns
*/
function Header() {
  return (
    <thead>
      <tr>
        <td>First Name</td>
        <td>Last Name</td>
      </tr>
    </thead>
  )
}

//lambda function or arrow function
/*
*write the table body
* @param {*} props : the data ti be writed: alist of students
* @returns
*/
const Body = (props) => {
  // we are building each table row, with the data we received given in the App.js
  const rows = props.dataTableIN.map((row, index) =>{ 
    return(
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.surname}</td>
      </tr>
    )
  })
  return(
    <tbody>
    {rows}
    </tbody>
  )
}


class Table extends Component{

    render(){
      //'read' data that was suplied to component 'Table03'
      const { studentsDataIn } = this.props
      return(

      <table className="table table-strippe table-sucess">
        <Header/>
        <Body dataTableIN={ studentsDataIn }/>
      </table>

      )
    }

}

export default Table;
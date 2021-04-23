import React from "react";
import "../styles/Tables.css";
import Navbar from "./Navbar";

function Tables({ employees }) {
  const localEmployees = employees.length > 0 && employees
  return (
    <Navbar>
      <Tables>
        <thead>
          <tr>
            <th>image</th>
            <th>name</th>
            <th>phone</th>
            <th>email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => {
            return (
              <tr>
                <td><img src={employee.picture.medium}/></td>
                <td>{employee.name.first}{employee.name.last}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{employee.DOB}</td>
              </tr>
            )
          })}
        </tbody>
      </Tables>
    </Navbar>
  )
}

export default Tables;

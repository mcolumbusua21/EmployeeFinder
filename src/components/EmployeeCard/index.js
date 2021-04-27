import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">image</th>
          <th scope="col">name</th>
          <th scope="col">phone</th>
          <th scope="col">email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((employee) => {
          return (
            <tr key={employee.login.uuid}>
              <td>
                <img src={employee.picture.medium} alt="pics"/>
              </td>
              <td>
                {employee.name.first}
                {employee.name.last}
              </td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.dob.date.slice(0,10)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default EmployeeCard;

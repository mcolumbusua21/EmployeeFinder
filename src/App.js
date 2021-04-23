import React from "react";
import Jumbotron from "./components/Jumbotron";
import Tables from "./components/Tables";
import Navbar from "./components/Navbar";
import API from "./utils/API";

class App extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await API.getUsers();
    this.setState({ employees: data.results });
  };

  render() {
   const { employees } = this.state;
    return (
      <table>
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
          {employees.length === 0 ? (
            <h2>NO EMPLOYEES</h2>
          ) : (
            employees
            .filter(this.filterEmployees)
            .map((employee) => <EmployeeRow {...employee} />)
            )}
        </tbody>
      </table>
    )
  }
}

export default App;

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

  filterEmployees(employee){
    if (employee.name.first.includes(this.state.search)) return true;
    if (employee.name.last.includes(this.state.search)) return true;
    if (employee.phone.includes(this.state.search)) return true;
    if (employee.email.includes(this.state.search)) return true;
  }

  render() {
   const { employees } = this.state;
    return (
     
        <tbody>
          {employees.length === 0 ? (
            <h2>NO EMPLOYEES</h2>
          ) : (
            employees
            .filter(this.filterEmployees)
            .map((employee) => <Tables {...employee} />)
            )}
        </tbody>
      </table>
    )
  }
}

export default App;

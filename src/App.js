import React from "react";
import Tables from "./components/Tables";
import API from "./utils/API";

class App extends React.Component {
  state = {
    employees: [],
    searched: []
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
  
    )
  }
}

export default App;

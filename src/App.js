import React from "react";
import API from "./utils/API";
import Navbar from "./components/Navbar"

class App extends React.Component {
  state = {
    employee: [],
    searched: []
  };

   async componentDidMount() {
     const { empData } = await API.getUsers();
      this.setState({ employee: empData.results, searched: empData.results });
  };


  filterEmployees(employee){
    if (employee.name.first.includes(this.state.search)) return true;
    if (employee.name.last.includes(this.state.search)) return true;
    if (employee.phone.includes(this.state.search)) return true;
    if (employee.email.includes(this.state.search)) return true;
  }

  handleSort = () => {
    const sortedArr = this.state.searched.sort((a, b) => a.name.first > b.name.first ? 1 : -1);
    this.setState({searched: sortedArr});
  };
  
  handleInputChange = e => {
    const value = e.target.value.toLowerCase();
    const searchedArr = this.state.employees.filter(employee => employee.name.first.toLowerCase().startsWith(value))
    this.setState({
      searched: searchedArr,
    });
  };
  

  render() {
    return (
      { Navbar }
    )
  }
}

export default App;

import React from "react";
import API from "./utils/API";
import EmployeeCard from "./components/EmployeeCard/index"



class App extends React.Component {
  state = {
    employee: [],
    searched: []
  };

   async componentDidMount() {
     const {data} = await API.getUsers();
     console.log(data)
      this.setState({ employee: data.results, searched: data.results });
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
    const searchedArr = this.state.employee.filter(employee => employee.name.first.toLowerCase().startsWith(value))
    this.setState({
      searched: searchedArr, 
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
      <nav className="bg-light justify-content-between">
        <div className="container-fluid justify-content-center">
          <span className="title h1"> TechNasty Employee Directory</span>
        </div>
      </nav>
  
      <input
        name="searchText"
        type="search"
        placeholder="Search by name"
        className="form-control"
        id="search"
        onChange={this.handleInputChange}
      />
  
      <button className="btn btn-success" onClick={this.handleSort}>Search</button>
  
      <EmployeeCard users={this.state.searched}  />
      </div>
    )
  }


}

export default App;

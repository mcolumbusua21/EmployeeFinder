import axios from "axios";
import App from "../App.js";

const API = {
  getUsers: function () {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
};
export default App;

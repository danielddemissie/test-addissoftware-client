import axios from "axios";
const axiosClient = axios.create({
  baseURL: "https://test-addissoftware-api.herokuapp.com/api/",
});

export default axiosClient;
